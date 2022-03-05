import { useState } from 'react';

function useToggleState(initialVal = false) {
  const [value, setValue] = useState(initialVal);

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
}

export default useToggleState;
