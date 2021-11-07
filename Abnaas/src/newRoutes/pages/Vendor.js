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
    axios.get(`http://localhost:8000/vendor/`).then((res) => setProducts(res.data.vendors));
  }, []);
  console.log(products);
  return (
    <>
      <Table className={classes.tableColor}>
        <TableHead>
          <TableRow className={classes.tableH}>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
          {products.map((product) => (
            <TableRow>
              <TableCell>{product.fullname}</TableCell>
              <TableCell>{product.phone}</TableCell>
              <TableCell>{product.email}</TableCell>
              <TableCell>{product.compnay}</TableCell>
              <TableCell>{product.address}</TableCell>

              <TableCell>
                <DeleteIcon className={classes.deleteColor} />
              </TableCell>
            </TableRow>
          ))}
        </TableHead>
      </Table>
    </>
  );
}
