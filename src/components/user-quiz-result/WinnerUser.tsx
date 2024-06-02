import Stack from '@mui/material/Stack';

export default function WinnerUser() {
  return (
    <Stack spacing={2} alignItems="center">
      <div
        style={{
          position: 'relative',
          width: 128,
          height: 128,
          border: '4px solid black',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <img
          src="src/assets/img/1.jpg"
          alt="Remy Sharp"
          style={{ width: '100%', height: '100%' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '24px',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            width: 32,
            height: 32,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
          }}
        >
          1
        </div>
      </div>
      <span>Owner Name</span>
      <span>2/10</span>
    </Stack>
  );
}
