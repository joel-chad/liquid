'use client'

import { useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-1/2 bg-white">
      <p>Right Underlay</p>
    </div>
  );
};

export default SignupForm;