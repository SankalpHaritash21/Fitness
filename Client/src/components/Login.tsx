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
    // Example validation
    if (!signInData.email || !signInData.password) {
      setSignInError("Email and password are required");
      return;
    }
    // Handle sign in logic
    console.log("Signing in with:", signInData);
    setSignInError("");
  };

  const handleSignUpSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Example validation
    if (!signUpData.name || !signUpData.email || !signUpData.password) {
      setSignUpError("All fields are required");
      return;
    }
    // Handle sign up logic
    console.log("Signing up with:", signUpData);
    setSignUpError("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-[60rem] bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-3 max-w-md w-full">
        <div className="flex justify-around mb-4">
          <button
            className={`py-2 px-4 rounded-md ${
              activeTab === "signIn"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("signIn")}
          >
            Sign In
          </button>
          <button
            className={`py-2 px-4 rounded-md ${
              activeTab === "signUp"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("signUp")}
          >
            Sign Up
          </button>
        </div>

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
    </div>
  );
};

export default LoginForm;
