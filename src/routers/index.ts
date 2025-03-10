// import appRouter from "./appRouter";
import homeRouter from './homeRouter';
import React from 'react';

// just like React-Router
interface Router {
  [key: string]: React.ReactElement | null;
  '*': React.ReactElement | null;
}

// Memoize router results to prevent unnecessary re-renders
const memoizedSwitch = new Map<string, React.ReactElement | null>();

const routerSwitch = (router: Router) => {
  // Return a memoized function that caches results
  return (pathname: string) => {
    // Check if we already have a cached result
    if (memoizedSwitch.has(pathname)) {
      return memoizedSwitch.get(pathname);
    }

    // If not, find the right route
    let result: React.ReactElement | null = null;

    // Check for exact match
    if (router[pathname]) {
      result = router[pathname];
    } else {
      // Fallback to wildcard
      result = router['*'];
    }

    // Cache the result for future use
    memoizedSwitch.set(pathname, result);
    return result;
  };
};

// Create a single, globally memoized instance of the home router
export const homeRouterSwitch = routerSwitch(homeRouter);
