import {useCallback, useContext, useEffect} from 'react';
// import { locationService, userService } from "../services";
import {homeRouterSwitch} from '../routers';
import appContext from '../stores/appContext';
import useLoading from '../hooks/useLoading';
import React from 'react';

function Home() {
  const {
    locationState: {pathname},
  } = useContext(appContext);
  // const { app } = dailyNotesService.getState();
  const loadingState = useLoading();
  // const refresh = useRefresh();

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
