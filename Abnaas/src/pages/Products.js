import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

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
  useEffect(() => {
    axios.get(`http://localhost:8000/product/`).then((res) => setProducts(res.data.data));
  }, []);

  function deleteProduct(id) {
    axios.delete(`http://localhost:8000/product/${id}`).then((res) => console.log(res));
  }

  console.log(products);
  return (
    <>
      <Model />
      <Table>
        <TableHead>
          <TableRow className={classes.tableH}>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Commission</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
          {products.map((product) => (
            <TableRow>
              <TableCell>{product.Name}</TableCell>
              <TableCell>{product._id}</TableCell>
              <TableCell>300</TableCell>
              <TableCell>3</TableCell>
              <TableCell>%10</TableCell>
              <TableCell>Abnaas</TableCell>
              <TableCell>Abnaas</TableCell>
              <TableCell>
                <DeleteIcon onClick={() => deleteProduct(product._id)} />
                <EditIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableHead>
      </Table>
    </>
  );
}
