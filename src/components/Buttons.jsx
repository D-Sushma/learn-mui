import React, { useState } from "react";
import { Button, Box, IconButton, Icon, ButtonGroup } from "@mui/material";

// ** button group
const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

function Buttons() {
  const [colors] = useState("secondary");
  const [disable, setDisable] = useState(false);
  function funButton() {
    // alert("color Changed!!");
    // setColor('warning')
    setDisable(true);
  }
  return (
    <>
      <h1>React MUI || button</h1>
      {/* -------------------------BASIC------------------------ */}
      {/* variant --> text(by default),outlined, contained
          size --> small, medium, large
          color --> primary(or info)(by default), secondary, warning, error, success
       */}
      <Box sx={{ "& button": { m: 1 } }}>
        <Button variant="text" color="secondary" size="small">
          Text
        </Button>
        <Button variant="outlined" color="error" size="large">
          Outlined
        </Button>
        <Button variant="contained" color="success" size="medium">
          Contained
        </Button>
        <Button color="primary">Primary</Button>
        <Button color="warning">warning</Button>
      </Box>
      {/* disabled 
          disableElevation
          link --> href="#"
      */}
      <Box sx={{ "& button": { m: 1 } }}>
        <Button disabled>Disabled</Button>
        <Button variant="outlined" disableElevation>
          Disable elevation
        </Button>
        <Button href="#text-buttons" variant="contained">
          Link
        </Button>
      </Box>
      {/* upload with text
          upload with icon
       */}
      <Box sx={{ "& button": { m: 1 } }}>
        <Button variant="contained" component="label">
          {" "}
          Upload Button <input hidden accept="image/*" type="file" />
        </Button>
        <IconButton color="primary" component="label">
          <input
            hidden
            accept="image/*"
            aria-label="upload picture"
            type="file"
          />
          <Icon>PhotoCamera</Icon>
        </IconButton>
      </Box>
      <br />
      {/* 1. want to change color on the click ---> use useState */}
      {/* 2. want to disabled on button click use -- another state */}
      <Button
        variant="contained"
        color={colors}
        disabled={disable}
        onClick={() => funButton()}
        // startIcon = {Delete}
      >
        Click Me
      </Button>
      <br />
      <br />
      {/* --------------------- BUTTON-GROUP------------------- */}
      <ButtonGroup
        variant="contained"
        aria-label="contained primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="small button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
      </Box>
      <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
    </Box>
    </>
  );
}

export default Buttons;
