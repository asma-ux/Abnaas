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
import { useParams } from 'react-router-dom';

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
  const { id } = useParams();
  const [products, setProducts] = useState({
    name: '',
    price: '',
    quantity: '',
    description: '',
    commission: '',
    image: ''
  });

  function save(e) {
    e.preventDefault();
    console.log(products.image);
    const formData = new FormData();
    formData.append('name', products.name);
    formData.append('price', products.price);
    formData.append('quantity', products.quantity);
    formData.append('description', products.description);
    formData.append('commission', products.commission);
    formData.append('image', products.image);

    axios
      .post('http://localhost:8000/products', formData)
      .then((res) => console.log(res))
      .catch((e) => console.log(e.response.data.message));
  }
  function update(e) {
    e.preventDefault();
    console.log(products.image);
    const formData = new FormData();
    formData.append('name', products.name);
    formData.append('price', products.price);
    formData.append('quantity', products.quantity);
    formData.append('description', products.description);
    formData.append('commission', products.commission);
    formData.append('image', products.image);

    axios
      .put(`http://localhost:8000/products/${id}`, formData)
      .then((res) => console.log(res))
      .catch((e) => console.log(e.response.data.message));
  }

  return (
    <div>
      <Button className={classes.btnColor} onClick={handleOpen}>
        Add Product
      </Button>

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
              onChange={(e) => setProducts({ ...products, name: e.target.value })}
            />
            <TextField
              className={classes.priceWidth}
              id="Standard"
              label="Price"
              variant="standard"
              onChange={(e) => setProducts({ ...products, price: e.target.value })}
            />

            <TextField
              className={classes.Quantity}
              id="standard-basic"
              label="quantity"
              variant="standard"
              onChange={(e) => setProducts({ ...products, quantity: e.target.value })}
            />

            <TextField
              className={classes.description}
              id="Standard"
              label="Description"
              variant="standard"
              onChange={(e) => setProducts({ ...products, description: e.target.value })}
            />

            <TextField
              className={classes.commission}
              id="standard-basic"
              label="Commission"
              variant="standard"
              onChange={(e) => setProducts({ ...products, commission: e.target.value })}
            />

            <TextField
              className={classes.image}
              type="file"
              id="standard-basic"
              label="upload image"
              name="image"
              variant="standard"
              onChange={(e) => setProducts({ ...products, image: e.target.files[0] })}
            />
          </Box>

          {id !== undefined ? (
            <Box noValidate autoComplete="off">
              <LoadingButton
                className={classes.btnSave}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
                onClick={(e) => update(e)}
              >
                update
              </LoadingButton>
            </Box>
          ) : (
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
          )}
        </div>
      </Box>
    </div>
  );
}
