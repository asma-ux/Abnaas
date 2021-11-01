// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function Logo({ sx }) {
  return <Box component="img" src="/static/logo.jfif" sx={{ width: 80, height: 80, ...sx }} />;
}
