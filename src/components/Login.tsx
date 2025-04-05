import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase';
import BloomTechLogo from './BloomTechLogo';
import OrangeButton from './OrangeButton';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) { // Catch specific Firebase error if possible
      setError(err.message || 'Failed to sign in'); // Provide a default error message
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with Google');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <BloomTechLogo className="h-12" />
        </div>
        <h2 className="text-xl font-semibold text-center text-text-primary mb-6">Sign in to your account</h2>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email address</label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full p-2 rounded bg-sidebar border border-border text-text-primary placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-2">Password</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full p-2 rounded bg-sidebar border border-border text-text-primary placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
            />
          </div>
          {error && (
            <p className="text-red-500 text-xs mt-2 mb-3 text-center bg-red-900/30 border border-red-700/50 rounded p-2">
              {error}
            </p>
          )}
          <OrangeButton type="submit" className="w-full mt-2 mb-4">Sign In</OrangeButton>
        </form>

        {/* Cleaner Divider */}
        <div className="my-6 flex items-center justify-center">
          <span className="px-2 text-xs text-text-muted uppercase">Or continue with</span>
        </div>

        <button 
          onClick={handleGoogleSignIn}
          className="w-full flex justify-center items-center gap-2 p-2 rounded border border-border bg-sidebar hover:bg-border/50 text-text-secondary hover:text-text-primary transition-colors duration-150"
        >
          <svg className="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 381.5 512 244 512 110.5 512 0 401.5 0 264 0 126.5 110.5 16 244 16c66.5 0 122.5 24.5 166 68.5l-67.5 64.5C291 148.5 272.5 128 244 128 175 128 117.5 186.5 117.5 264s57.5 136 126.5 136c46.5 0 76.5-22 93.5-40l67.5 63.5C367 450 312.5 480 244 480 141.5 480 48 411.5 48 264S141.5 48 244 48c69.5 0 129 28.5 173.5 75.5L488 136V261.8z"></path></svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login; 