'use client'

import { useState } from "react";

const LeftUnderlay = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-1/2 bg-white">
      <div className="flex justify-center items-center">
        <p>Left Underlay</p>
      </div>
    </div>
  );
};

export default LeftUnderlay;