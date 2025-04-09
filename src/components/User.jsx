import React from 'react'
import { useState } from 'react'

// conditionally render a UI for when the uSer is not logged in
const User = () => {
  const [user, setUser] = useState(false);
  const handleUserLogin = () => {
    setUser(true);
  };
  const handleUserLogout = () => {
    setUser(false);
  };
  // if (!user) {
  //   return (
  //  <div>
  //       <h1>You are Not logged in</h1>

  //       <button className="mybtn" onClick={handleUserLogin}>
  //         log in
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <>
      {!user ? (
        <div>
          <h1>You are Not logged in</h1>

          <button className="mybtn" onClick={handleUserLogin}>
            log in
          </button>
        </div>
      ) : (
        <div>
          <h1>Welcome to your Dashboard</h1>
          <button className="mybtn" onClick={handleUserLogout}>
            Log Out
          </button>
        </div>
      )}
    </>
  );
};

export default User;