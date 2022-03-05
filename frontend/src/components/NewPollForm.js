import React from 'react';
import PollDataService from '../services/PollDataService';
import useInputState from '../hooks/useInputState';
import useToggleState from '../hooks/useToggleState';
import { Paper, TextField, Typography, Button, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function NewPollForm({ retrievePolls }) {
  const [question, handleQuestionChange, resetQuestion] = useInputState('');
  const [ansOne, handleAnsOneChange, resetAnsOne] = useInputState('');
  const [ansTwo, handleAnsTwoChange, resetAnsTwo] = useInputState('');
  const [showForm, toggleShowForm] = useToggleState(false);

  const addPoll = async (e) => {
    e.preventDefault();
    try {
      const response = await PollDataService.addNewPoll(
        question,
        ansOne,
        ansTwo
      );

      if (response.status === 200) {
        resetQuestion();
        resetAnsOne();
        resetAnsTwo();
        toggleShowForm();
        retrievePolls();
      }

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const toggleForm = (e) => {
    e.preventDefault();
    toggleShowForm();
  };

  return (
    <>
      <Fab
        variant='extended'
        color='secondary'
        sx={{ mt: 3, mb: 3 }}
        onClick={toggleForm}
      >
        {showForm ? (
          <>
            <RemoveIcon sx={{ mr: 1 }} />
            Cancel New Poll
          </>
        ) : (
          <>
            <AddIcon sx={{ mr: 1 }} />
            Add New Poll
          </>
        )}
      </Fab>
      {showForm && (
        <Paper
          style={{
            margin: '2rem 0',
            padding: '0 1rem'
          }}
        >
          <Typography
            style={{ padding: '1rem' }}
            variant='h5'
            align='center'
            component='div'
          >
            Add New Poll
          </Typography>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <TextField
              value={question}
              onChange={handleQuestionChange}
              margin='normal'
              label='Add your question'
              fullWidth
            />
            <TextField
              value={ansOne}
              onChange={handleAnsOneChange}
              margin='normal'
              label='Answer option one'
              fullWidth
            />
            <TextField
              value={ansTwo}
              onChange={handleAnsTwoChange}
              margin='normal'
              label='Answer option two'
              fullWidth
            />
            <Button
              style={{ margin: '1rem', width: 'auto' }}
              variant='contained'
              color='secondary'
              size='lg'
              onClick={addPoll}
            >
              Add Poll
            </Button>
          </form>
        </Paper>
      )}
    </>
  );
}

export default NewPollForm;
