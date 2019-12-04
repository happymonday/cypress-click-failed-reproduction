import React, { useState, useEffect } from 'react';

interface IUserProps {
  firstName: string;
  lastName: string;
  address: string;
}

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  
  const intervalMs = 1

  useEffect(() => {
    // Only re-render once
    if (count > 1) { 
      return;
    }
    const interval = setTimeout(() => {
      setCount(count => count+1)
    }, intervalMs);
  });

  // Note: I can only get this to reliably reproduce if we are changing element types. If you change the default value of "changing" to <div></div>
  // cypress never fails. Similarly, if you change the "count % 2 == 0" version to a <button>, cypress never fails.
  let changing = <button></button>
  if(count % 2 == 0) {
    changing = <div className="button" id="changing-button" onClick={() => console.log(`Clicked at count ${count}`)}>Cool Element That Exists But Is Re-Rendered Immediately On Page Load</div>
  }

  return changing;
}

export default App;