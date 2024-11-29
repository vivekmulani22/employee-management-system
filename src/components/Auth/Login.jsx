import React, { useState } from 'react';

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      setEmail("");
      setPassword("");
      handleLogin(email, password);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-[93%] max-w-md space-y-8 p-10 bg-[#1C1C1C]/50 backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl">
        <div>
          <h2 className="text-4xl font-bold text-center animate-pulse bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Welcome Back
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="group">
              <label htmlFor="email" className="block text-emerald-400 mb-2 transform group-hover:translate-x-2 transition-transform duration-300">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-black/30 backdrop-blur-sm rounded-2xl p-4 border-l-4 border-emerald-400 focus:ring-2 ring-emerald-400/50 outline-none transition-all duration-500 hover:bg-black/40 text-white"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="group">
              <label htmlFor="password" className="block text-emerald-400 mb-2 transform group-hover:translate-x-2 transition-transform duration-300">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full bg-black/30 backdrop-blur-sm rounded-2xl p-4 border-l-4 border-emerald-400 focus:ring-2 ring-emerald-400/50 outline-none transition-all duration-500 hover:bg-black/40 text-white"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full mt-8 relative group bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold py-3 px-6 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative">Sign In</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
