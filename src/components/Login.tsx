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
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <BloomTechLogo className="h-14" />
        </div>
        <h2 className="text-2xl font-bold text-center text-text-primary mb-6">Login to Curriculum</h2>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email</label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 rounded bg-sidebar border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-1">Password</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 rounded bg-sidebar border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
          <OrangeButton type="submit" className="w-full mb-4">Login</OrangeButton>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-text-muted">Or continue with</span>
          </div>
        </div>

        <button 
          onClick={handleGoogleSignIn}
          className="w-full flex justify-center items-center gap-2 p-2 rounded border border-border text-text-secondary hover:bg-sidebar hover:text-text-primary transition-colors"
        >
          <svg className="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 381.5 512 244 512 110.5 512 0 401.5 0 264 0 126.5 110.5 16 244 16c66.5 0 122.5 24.5 166 68.5l-67.5 64.5C291 148.5 272.5 128 244 128 175 128 117.5 186.5 117.5 264s57.5 136 126.5 136c46.5 0 76.5-22 93.5-40l67.5 63.5C367 450 312.5 480 244 480 141.5 480 48 411.5 48 264S141.5 48 244 48c69.5 0 129 28.5 173.5 75.5L488 136V261.8z"></path></svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login; 