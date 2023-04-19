import React, { useState } from 'react';
import './App.css';
import { Button, Box, IconButton, Icon } from '@mui/material';
// import {Delete} from '@mui/icons-material';

function App() {
  const [colors, setColor] = useState('secondary')
  const [disable, setDisable] = useState(false)
  function funButton() {
    // alert("color Changed!!");
    // setColor('warning')
    setDisable(true)
  }
  return (
    <div className="App">
      <h1>React MUI</h1>
      <Box sx={{ '& button': { m: 1 } }}>
        <Button variant="text" color='secondary' size='small'>Text</Button>
        <Button variant="contained" color='success' size='medium'>Contained</Button>
        <Button variant="outlined" color='error' size='large'>Outlined</Button>
        <Button color='primary'>Primary</Button>
        {/* <Button color='action'>Action</Button> */}
        <Button color='warning'>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
        <Button variant="outlined" disableElevation>Disable elevation</Button>
        <Button variant='contained' component="label"> Upload Button <input hidden accept='image/*' type='file' /></Button>
        <IconButton color="primary" component="label">
          <input hidden accept="image/*" aria-label="upload picture" type="file" />
          <Icon>PhotoCamera</Icon>
        </IconButton>
      </Box>
      <br /><br /><br />
      {/* 1. want to change color on the click ---> use useState */}
      {/* 2. want to disabled on button click use -- another state */}
      <Button
        variant='contained' color={colors} disabled={disable}
        onClick={() => funButton()}
        // startIcon = {Delete}
      >Click Me
      </Button>
    </div>
  );
}

export default App;
