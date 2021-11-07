// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function Logo({ sx }) {
  return <Box component="img" src="/static/logo.png" sx={{ width: 100, height: 100, ...sx }} />;
}
