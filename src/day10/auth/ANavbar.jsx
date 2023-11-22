import { useState } from "react";

const ANavbar = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user == null ? (
        <button onClick={() => setUser("Shree")}>Login</button>
      ) : (
        <>
          <p>{user}</p>
          <button onClick={() => setUser(null)}>Logout</button>
        </>
      )}
    </div>
  );
};

export default ANavbar;
