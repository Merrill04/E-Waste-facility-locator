"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add sign-in logic here, e.g., API call for authentication

    // Redirect or do something after successful login
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account?{" "}
        <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Signin;
