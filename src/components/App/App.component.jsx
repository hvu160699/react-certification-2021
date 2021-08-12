import React from 'react';

import GlobalProvider from '../../providers/Global';
import AppLayout from '../Layout';
import AppRouter from '../../router';

const App = () => {
  return (
    <GlobalProvider>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </GlobalProvider>
  );
};

export default App;
