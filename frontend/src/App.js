import { StyledEngineProvider } from '@mui/material/styles';
import PollApp from './components/PollApp';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <PollApp />
    </StyledEngineProvider>
  );
}

export default App;
