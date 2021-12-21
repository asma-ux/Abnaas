const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json({
//       messagge: "found",
//       data: users,
//     });
//   } catch (e) {
//     res.status(404).json({ message: "error" });
//   }
//   res.status(200).json({ message: "get all users" });
// };

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ Email: req.body.Email });
    if (user === null) {
      return res.status(400).json({ message: "user does not exsist" });
    }

    const compare = await bcrypt.compare(req.body.password, user.password);
    if (compare === false) {
      return res.status(400).json({ message: "Wrong password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role, Email: user.Email },
      "ABNAAS",
      {
        expiresIn: "2 days",
      }
      // res.json({token})
    );

    user.password = undefined;
    res.status(200).json({ message: "Logged in", user, token });
  } catch (e) {
    res.status(404).json({ message: "error" });
    res.status(400).json(console.log(e.message));
  }
};

exports.saveUser = async (req, res) => {
  try {
    if (
      req.body.userName === "" ||
      req.body.Email === "" ||
      req.body.password === "" ||
      req.body.ConfirmPassword === ""
    ) {
      return res.status(400).send({ message: "please fill in all fields" });
    }

    const user = await User.findOne({ Email: req.body.Email });
    if (user !== null) {
      return res.status(400).json({ message: "Email already exsists" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const createdUser = await User.create({
      Email: req.body.Email,
      userName: req.body.userName,
      password: hashedPassword,
      role: req.body.role,
      // ConfirmPassword:req.body.ConfirmPassword
    });

    const token = jwt.sign(
      { id: createdUser._id, role: createdUser.role, email: createdUser.email },
      "ABNAAS",
      {
        expiresIn: "2 days",
      }
    );
    res.status(201).json({ message: "created user", token });
  } catch (e) {
    res.status(400).json({ message: "error" });
    res.status(400).json(console.log(e.message));
  }
};
