import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import Modal from '@mui/material/Modal';
import useStyles from './styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4
};

export default function BasicModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [products, setProducts] = useState({
    Name: '',
    Price: '',
    Quantity: '',
    Category: '',
    Description: '',
    Image: '',
    CompanyName: ''
  });

  function save(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('Name', products.Name);
    formData.append('Price', products.Price);
    formData.append('Commission', products.Commission);
    formData.append('Quanity', products.Quantity);
    formData.append('Category', products.Category);
    formData.append('Description', products.Description);
    formData.append('Image', products.Image);
    formData.append('Company Name', products.CompanyName);

    axios
      .post('http://localhost:8000/product', formData)
      .then((res) => console.log(res))
      .catch((e) => console.log(e.response.data.message));
  }

  return (
    <div>
      <Button className={classes.btnColor} onClick={handleOpen}>
        Add Product
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.bg}>
            <Typography className={classes.h2color} variant="h3" color="textPrimary" gutterBottom>
              New Product
            </Typography>
            <Box
              component="form"
              encrypt=""
              sx={{
                '& > :not(style)': { m: 3 }
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={classes.wd}
                id="standard"
                label="Product Name"
                variant="standard"
                onChange={(e) => setProducts({ ...products, Name: e.target.value })}
              />
              <TextField
                className={classes.category}
                id="standard"
                label=" Category"
                variant="standard"
                onChange={(e) => setProducts({ ...products, Category: e.target.value })}
              />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 3 }
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={classes.description}
                id="Standard"
                label="Description"
                variant="standard"
                onChange={(e) => setProducts({ ...products, Description: e.target.value })}
              />
              <TextField
                className={classes.priceWidth}
                id="Standard"
                label="Price"
                variant="standard"
                onChange={(e) => setProducts({ ...products, Price: e.target.value })}
              />

              <TextField
                className={classes.commission}
                id="standard-basic"
                label="Commission"
                variant="standard"
                onChange={(e) => setProducts({ ...products, Commission: e.target.value })}
              />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 3 }
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={classes.Quantity}
                id="standard-basic"
                label="quantity"
                variant="standard"
                onChange={(e) => setProducts({ ...products, CompanyName: e.target.value })}
              />
              <TextField
                className={classes.image}
                type="file"
                id="standard-basic"
                label="upload image"
                name="Image"
                variant="standard"
                onChange={(e) => setProducts({ ...products, Image: e.target.files[0] })}
              />
              <TextField
                className={classes.companyName}
                id="standard-basic"
                label="Company Name"
                variant="standard"
                onChange={(e) => setProducts({ ...products, CompanyName: e.target.value })}
              />
            </Box>

            <Box noValidate autoComplete="off">
              <LoadingButton
                className={classes.btnSave}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
                onClick={(e) => save(e)}
              >
                save
              </LoadingButton>
            </Box>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
