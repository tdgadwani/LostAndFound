import React, { useRef } from "react";

const RegistrationForm = ({ onSuccess }) => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const rollNoRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
      rollNo: rollNoRef.current.value,
    };
    // You can add form validation logic here before submitting the form
    onSuccess(formData);
  };

  return (
    <div className="popup bg-purple-400">
      <div className="popup_inner bg-yellow-500 p-6 rounded-lg flex flex-col items-center">
        <h2 className="text-2xl mb-4">Create Account</h2>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="fullName">
              Full Name:
            </label>
            <input
              id="fullName"
              type="text"
              ref={fullNameRef}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              type="email"
              ref={emailRef}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="phone">
              Phone Number:
            </label>
            <input
              id="phone"
              type="tel"
              ref={phoneRef}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              type="password"
              ref={passwordRef}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              id="confirmPassword"
              type="password"
              ref={confirmPasswordRef}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="rollNo">
              Roll Number:
            </label>
            <input
              id="rollNo"
              type="text"
              ref={rollNoRef}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
