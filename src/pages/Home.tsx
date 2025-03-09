import {useCallback, useEffect} from 'react';
// import { locationService, userService } from "../services";
import {homeRouterSwitch} from '../routers';
import useLoading from '../hooks/useLoading';
import React from 'react';
import {useLocation} from '../hooks/useStore';

function Home() {
  // 使用我们的自定义钩子获取位置状态
  const {pathname} = useLocation();
  const loadingState = useLoading();
  //   // const refresh = useRefresh();

  useEffect(() => {
    loadingState.setFinish();
  }, []);

  return (
    <>
      {/* {loadingState.isLoading ? null : ( */}
      <section id="page-wrapper">
        <main className="content-wrapper">{homeRouterSwitch(pathname)}</main>
      </section>
      {/* )} */}
    </>
  );
}

export default Home;
