import {useEffect} from 'react';
import Home from './pages/Home';
import {eventService, globalStateService} from './services';
import './less/Calendar.less';
import './helpers/polyfill';
import React from 'react';

// Zustand 不需要 Provider，所以直接导出 App 组件
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

  console.log('render 6th');

  return (
    <>
      <Home />
    </>
  );
}

export default App;
