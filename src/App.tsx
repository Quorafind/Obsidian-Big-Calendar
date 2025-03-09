import {useEffect} from 'react';
import Home from './pages/Home';
import {globalService} from './services';
import './less/Calendar.less';
import React from 'react';

// Zustand 不需要 Provider，所以直接导出 App 组件
function App() {
  useEffect(() => {
    const handleWindowResize = () => {
      globalService.setIsMobileView(document.body.clientWidth <= 875);
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

export default App;
