import CardComponent from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { UserQuizResult } from '../../types/Quiz';

type CardProps = {
  user: UserQuizResult;
};


export default function Card({ user }: CardProps) {
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
              <span>{user.rank}</span>
              <Avatar alt="Remy Sharp" src={user.avatar} />
              <span>{user.name}</span>
            </Stack>
            <div>
              <span>{user.score}/{user.completed}</span>
            </div>
          </Stack>
        </CardContent>
      )}
    </CardComponent>
  );
}
