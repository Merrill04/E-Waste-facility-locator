"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar"; // Add Navbar import

const Signup = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Add sign-up logic here, e.g., API call to create a user

    // After successful signup, navigate to sign-in page
    router.push("/signin");
  };

  return (
    <>
      <Navbar /> {/* Add Navbar component */}
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <a href="/signin">Sign In</a>
        </p>
        <div className="social-signin">
          <button className="google-signin">Sign in with Google</button>
          <button className="facebook-signin">Sign in with Facebook</button>
        </div>
      </div>
    </>
  );
};

export default Signup;