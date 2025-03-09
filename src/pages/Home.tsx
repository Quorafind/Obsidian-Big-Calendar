import {homeRouterSwitch} from '../routers';
import React from 'react';
import {useLocation} from '../hooks/useStore';

function Home() {
  const {pathname} = useLocation();

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
