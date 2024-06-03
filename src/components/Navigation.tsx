import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { Home , Settings} from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Quiz" icon={<Home />} component={Link} to="/" />
          <BottomNavigationAction label="Leaderboard" icon={<Settings />} component={Link} to="/leaderboard"/>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

