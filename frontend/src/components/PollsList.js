import React from 'react';
import PollCard from './PollCard';
import { Grid } from '@mui/material';

function PollsList({ polls }) {
  return (
    <Grid container spacing={2}>
      {polls.map((singlePoll) => (
        <Grid item xs={12} sm={6} lg={4} xl={4} key={singlePoll._id}>
          <PollCard pollObj={singlePoll} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PollsList;
