import React, { useState, useEffect } from 'react';
import PollDataService from '../services/PollDataService';
import NewPollForm from './NewPollForm';
import PollsList from './PollsList';
import { Typography, Container, AppBar, Toolbar } from '@mui/material';

// import { v4 as uuid } from 'uuid';

function PollApp() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    retrievePolls();
  }, []);

  const retrievePolls = async () => {
    try {
      const response = await PollDataService.getAll();
      setPolls(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <AppBar
        color='secondary'
        position='static'
        style={{ height: '64px', alignItems: 'center' }}
      >
        <Toolbar>
          <Typography variant='h3' color='inherit'>
            Poll Maker
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ height: '80vh' }}>
        <NewPollForm retrievePolls={retrievePolls} />
        <PollsList polls={polls} />
      </Container>
    </>
  );
}

export default PollApp;
