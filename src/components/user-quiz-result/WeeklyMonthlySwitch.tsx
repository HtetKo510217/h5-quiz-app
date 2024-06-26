import * as React from 'react';
import { ButtonGroup, Button } from '@mui/material';

export default function WeeklyMonthlyButtonGroup() {
  const [selectedOption, setSelectedOption] = React.useState('weekly');

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <ButtonGroup sx={{ mb: 6 ,}}>
      <Button
        variant={selectedOption === 'weekly' ? 'contained' : 'outlined'}
        color="primary"
        onClick={() => handleOptionChange('weekly')}
        sx={{ '&:focus': { outline: 'none' },color: 'white',px: 6 }}
      >
        Weekly
      </Button>
      <Button
        variant={selectedOption === 'monthly' ? 'contained' : 'outlined'}
        color="primary"
        onClick={() => handleOptionChange('monthly')}
        sx={{ '&:focus': { outline: 'none' },color: 'white',px: 6 }}
      >
        Monthly
      </Button>
    </ButtonGroup>
  );
}

