import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from '@mui/material/Link';
import axios from 'axios';
import { useState, useEffect } from 'react';

// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination
} from '@mui/material';
import Model from './model';
// components
import useStyles from './styles';
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../components/_dashboard/user';
//

// ----------------------------------------------------------------------

export default function User() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    axios.get(`http://localhost:8000/products`).then((res) => setProducts(res.data.product));
  });

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

  function deleteProduct(id) {
    axios.delete(`http://localhost:8000/products/${id}`).then((res) => console.log(res));
  }

  console.log(products);
  return (
    <>
      <Model />
      <Table className={classes.tableColor}>
        <TableHead>
          <TableRow className={classes.tableH}>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>description</TableCell>
            <TableCell>Commission</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
          {products.map((product) => (
            <TableRow>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>%10</TableCell>

              <TableCell>
                <DeleteIcon
                  className={classes.deleteColor}
                  onClick={() => deleteProduct(product._id)}
                />
                <Link href={`/dashboard/product/edit/${product._id}`} underline="none">
                  <EditIcon className={classes.editColor} />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableHead>
      </Table>
    </>
  );
}
