import React from "react";

function SignIn() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="grid-container">
        <h2>Please Sign In an account</h2>

          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
        </div>
      </div>
    </>
  );
}

export default SignIn;
