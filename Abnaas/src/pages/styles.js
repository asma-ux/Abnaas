import React from 'react';
import { makeStyles } from '@mui/styles';
import { padding } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  tableColor: {
    backgroundColor: 'white'
  },
  tableH: {
    backgroundColor: '#00e6cb'
  },
  deleteColor: {
    color: 'red'
  },
  editColor: {
    color: 'teal'
  },
  btnColor: {
    color: 'white',
    background: '#009987',
    marginLeft: '93ch',
    marginBottom: '1ch',
    padding: '1.5ch'
  },

  btnSave: {
    background: '#019376',
    marginLeft: '68ch',
    paddingLeft: '3ch',
    marginBottom: '2ch'
  },
  h2color: {
    color: '#009f7f',
    marginLeft: '2ch',
    textShadow: '0.5px 0.5px 0.5px darkblue'
  },

  bg: {
    paddingBottom: '1px'
  },
  wd: {
    width: '40ch'
  },
  description: {
    width: '30ch'
  },
  priceWidth: {
    width: '15ch'
  },

  commission: {
    width: '15ch'
  },
  category: {
    width: '25ch'
  },
  image: {
    width: '60ch'
  },
  Quantity: {
    width: '30ch'
  },
  companyName: {
    width: '90ch'
  }
}));
// end od form styles

export default useStyles;
