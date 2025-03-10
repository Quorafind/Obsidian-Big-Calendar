import React from 'react';
import BigCalendar from '../component/BigCalendar';

// Create a memoized instance of the BigCalendar component
const MemoizedBigCalendar = React.memo(BigCalendar);

// Define the router with the memoized component
const homeRouter = {
  '*': <MemoizedBigCalendar />,
};

export default homeRouter;
