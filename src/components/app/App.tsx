import React, { useState, useEffect } from 'react'; 
import { LayoutCompnent } from '../layout';
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
   
  return (
    <>
    {
      loading ? (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
        }}>
          <RingLoader color={'#36D7B7'} loading={loading} size={80} />
        </div>
      ) : (
        <LayoutCompnent />
      )
      
    }
    </>
  );
}

export default App;
