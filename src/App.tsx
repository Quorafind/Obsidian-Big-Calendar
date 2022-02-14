import {useContext, useEffect} from 'react';
import Home from './pages/Home';
import {globalStateService} from './services';
import './less/Calendar.less';
import Provider from './labs/Provider';
import appContext from './stores/appContext';
import appStore from './stores/appStore';
import './helpers/polyfill';
import React from 'react';

function StrictApp() {
  return (
    <Provider store={appStore} context={appContext}>
      <App />
    </Provider>
  );
}

function App() {
  useEffect(() => {
    const handleWindowResize = () => {
      globalStateService.setIsMobileView(document.body.clientWidth <= 875);
    };

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default StrictApp;
