import { Stack } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuItem from '@mui/material/MenuItem';

export default function NavBar() {
  return (
    <Stack direction="row" spacing={10} alignItems="center"  sx={{ px: 2,py: 2}} >
      <ArrowBackIosIcon sx={{ cursor: 'pointer', color: 'white' }} />
      <MenuItem sx={{ color: 'white' }}>Leaderboard</MenuItem>
    </Stack>
  )
}
