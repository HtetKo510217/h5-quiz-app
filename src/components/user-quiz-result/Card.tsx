import CardComponent from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function Card() {
  const [isLoading,setLoading ] = React.useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <CardComponent variant="outlined" sx={{ minWidth: 320, borderRadius: 5 }}>
      {isLoading ? (
        <CardContent>
          <Stack direction="row" spacing={2} alignItems={"center"} justifyContent={"space-between"}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Skeleton variant="text" width={20} height={20} />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="text" width={100} />
            </Stack>
            <div>
              <Skeleton variant="text" width={50} />
            </div>
          </Stack>
        </CardContent>
      ) : (
        <CardContent>
          <Stack direction="row" spacing={2} alignItems={"center"} justifyContent={"space-between"}>
            <Stack direction="row" spacing={2} alignItems="center">
              <span>1</span>
              <Avatar alt="Remy Sharp" src="src/assets/img/1.jpg" />
              <span>Owner Name</span>
            </Stack>
            <div>
              <span>2/10</span>
            </div>
          </Stack>
        </CardContent>
      )}
    </CardComponent>
  );
}
