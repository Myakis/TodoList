import { Button } from '@mui/material';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', margin: 0 }}>
      <Button
        sx={{ padding: 3, fontSize: 20, color: '#cccccc', margin: 0 }}
        fullWidth
        variant='contained'>
        TODO LIST
      </Button>
    </div>
  );
};

export default Header;
