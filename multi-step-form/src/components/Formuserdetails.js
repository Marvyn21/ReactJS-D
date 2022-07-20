import React, { Component } from 'react'
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class Formuserdetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

  render() {
      const { values } = this.props;
    return (
      <ThemeProvider>
          <React.Fragment>
              <AppBar title="Enter User Details"/>
          </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default Formuserdetails