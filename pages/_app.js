import '../styles/globals.scss';
import React from 'react';

function App({Component, pageProps}) {
  return (
    <React.Fragment>
      
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default App;