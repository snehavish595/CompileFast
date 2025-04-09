// src/app/components/ProtectedComponent.js

import React from "react";

const ProtectedComponent = () => {
  return (
    <div>
      <h1>This is a Protected Component!</h1>
      <p>Only accessible if the user is authenticated.</p>
    </div>
  );
};

export default ProtectedComponent;
