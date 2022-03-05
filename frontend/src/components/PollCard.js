import React, { useState } from 'react';
import PollDataService from '../services/PollDataService';
// import axios from 'axios';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  ButtonGroup
} from '@mui/material';

export default function PollCard({ pollObj }) {
  const [poll, updatePoll] = useState(pollObj);
  const [voted, updateVoted] = useState(false);

  const vote = async (ans, e) => {
    e.preventDefault();
    try {
      const response = await PollDataService.updateVote(poll._id, ans);
      if (response.status === 200) {
        updatePoll(response.data);
        updateVoted(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  //color palette:
  //https://coolors.co/palette/264653-2a9d8f-e9c46a-f4a261-e76f51
  return (
    <Card
      sx={{
        borderRadius: 2,
        border: '1px solid #2A9D8F',
        maxWidth: 350,
        marginTop: 4
      }}
    >
      <CardContent>
        <Typography variant='h5' align='center' sx={{ color: '#264653', m: 2 }}>
          {poll.question}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <ButtonGroup
          size='large'
          variant='outlined'
          color='secondary'
          fullWidth
        >
          <Button
            id='ansOne'
            sx={{
              padding: '1rem',
              margin: 0,
              borderStyle: 'solid solid none none',
              borderColor: '#2A9D8F',
              borderRadius: 0
            }}
            onClick={(e) => vote('ansOne', e)}
            disabled={voted}
          >
            <Typography sx={{ color: '#264653' }}>
              {poll.ansOne.ans}
              {voted && `\nVotes: ${poll.ansOne.votes}`}
            </Typography>
          </Button>
          <Button
            id='ansTwo'
            sx={{
              padding: '1rem',
              margin: 0,
              borderStyle: 'solid none none solid',
              borderColor: '#2A9D8F',
              borderRadius: 0
            }}
            onClick={(e) => vote('ansTwo', e)}
            disabled={voted}
          >
            <Typography sx={{ color: '#264653' }}>
              {poll.ansTwo.ans}
              {voted && `\nVotes: ${poll.ansTwo.votes}`}
            </Typography>
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
