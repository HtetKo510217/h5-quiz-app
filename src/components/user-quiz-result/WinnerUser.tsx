import * as React from 'react';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

type UserQuizResult = {
  id: number;
  name: string;
  rank: number;
  score: number;
  completed: number;
  avatar: string;
};

type WinnerUserProps = {
  user: UserQuizResult;
};

export default function WinnerUser({ user }: WinnerUserProps) {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <Stack spacing={2} alignItems="center">
        <Skeleton variant="circular" width={90} height={90} />
        <Skeleton variant="text" width={100} />
        <Skeleton variant="text" width={50} />
      </Stack>
    );
  }
  const color = user.rank === 1 ? '#FFD912' : '#004643';

  return (
    <Stack spacing={2} alignItems="center">
      <div
        style={{
          position: 'relative',
        }}
      >
        {
          user.rank === 1 && <img src="src/assets/img/vector.png" style={{ position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)' }} />
        }
        <div
          style={{
            position: 'relative',
            width: 90,
            height: 90,
            border: `4px solid ${color}`,
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <img
            src={user.avatar}
            alt="Remy Sharp"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '16px',
            color: 'white',
            backgroundColor: color,
            width: 24,
            height: 24,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
          }}
        >
          {user.rank}
        </div>
      </div>
      <span>{user.name}</span>
      <span>{user.score}/{user.completed}</span>
    </Stack>
  );
}