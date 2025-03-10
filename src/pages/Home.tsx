import {homeRouterSwitch} from '../routers';
import React, {useMemo} from 'react';
import {useLocation} from '../hooks/useStore';

function Home() {
  // Get location with our optimized hook
  const location = useLocation();

  // Memoize the content based only on pathname changes
  const content = useMemo(() => {
    return homeRouterSwitch(location.pathname);
  }, [location.pathname]);

  return (
    <>
      {/* {loadingState.isLoading ? null : ( */}
      <section id="page-wrapper">
        <main className="content-wrapper">{content}</main>
      </section>
      {/* )} */}
    </>
  );
}

// Export as memoized component to prevent unnecessary renders
export default React.memo(Home);
