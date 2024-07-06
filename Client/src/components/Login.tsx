import React, { useState, ChangeEvent, FormEvent } from "react";

const LoginForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"signIn" | "signUp">("signIn");
  const [showPassword, setShowPassword] = useState(false);
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [signInError, setSignInError] = useState("");
  const [signUpError, setSignUpError] = useState("");

  const handleSignInChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSignUpChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignInSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signInData.email || !signInData.password) {
      setSignInError("Email and password are required");
      return;
    }
    console.log("Signing in with:", signInData);
    setSignInError("");
  };

  const handleSignUpSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signUpData.name || !signUpData.email || !signUpData.password) {
      setSignUpError("All fields are required");
      return;
    }
    console.log("Signing up with:", signUpData);
    setSignUpError("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-4xl flex flex-wrap">
        <div className="w-full sm:w-1/2 p-4">
          <h2 className="text-center text-2xl font-bold mb-4">
            {activeTab === "signIn" ? "Sign In" : "Sign Up"}
          </h2>
          {activeTab === "signIn" ? (
            <form onSubmit={handleSignInSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={signInData.email}
                  onChange={handleSignInChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={signInData.password}
                    onChange={handleSignInChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-gray-500"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Sign In
              </button>
              {signInError && (
                <p className="text-xs text-red-500 mt-2">{signInError}</p>
              )}
            </form>
          ) : (
            <form onSubmit={handleSignUpSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={signUpData.name}
                  onChange={handleSignUpChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={signUpData.email}
                  onChange={handleSignUpChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={signUpData.password}
                    onChange={handleSignUpChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-gray-500"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Sign Up
              </button>
              {signUpError && (
                <p className="text-xs text-red-500 mt-2">{signUpError}</p>
              )}
            </form>
          )}
        </div>
        <div className="w-full sm:w-1/2 p-4 flex justify-center items-center bg-blue-500 text-white rounded-lg">
          <div className="flex justify-center flex-col">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Welcome Back!
            </h2>
            <p className="mb-4 text-center">
              To keep connected with us please login with your personal info.
            </p>
            <div className="w-full flex justify-center">
              <button
                onClick={() =>
                  setActiveTab((prev) =>
                    prev === "signIn" ? "signUp" : "signIn"
                  )
                }
                className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 w-[10rem]"
              >
                {activeTab === "signIn"
                  ? "Switch to Sign Up"
                  : "Switch to Sign In"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
