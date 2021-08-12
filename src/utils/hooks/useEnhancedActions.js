import { useEffect, useState } from 'react';

const useEnhancedActions = (actions, dispatch) => {
  const [enhancedActions, setEnhancedActions] = useState(actions);

  useEffect(() => {
    Object.keys(actions).forEach((key) =>
      setEnhancedActions((prev) => ({
        ...prev,
        [key]: (...args) => actions[key](...args)(dispatch),
      }))
    );
  }, [actions, dispatch]);

  return { enhancedActions };
};

export default useEnhancedActions;
