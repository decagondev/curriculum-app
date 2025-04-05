import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../AuthContext';

const TopBar: React.FC = () => {
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
      // Handle logout error (e.g., show a notification)
    }
  };

  return (
    <header className="py-4 px-6 bg-background border-b border-border flex justify-between items-center">
      <h1 className="text-2xl font-bold text-text-primary">Curriculum</h1>
      <div className="flex items-center space-x-4">
        {currentUser?.email && (
          <span className="text-sm text-text-secondary hidden sm:inline">{currentUser.email}</span>
        )}
        <button 
          onClick={handleLogout}
          className="text-sm text-text-secondary hover:text-accent transition-colors"
        >
          Log Out
        </button>
      </div>
    </header>
  );
};

export default TopBar; 