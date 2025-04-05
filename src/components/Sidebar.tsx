import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-full md:w-64 md:min-h-screen bg-sidebar border-r border-border">
      <div className="p-4 flex justify-center">
        <div className="w-16 h-16 flex items-center justify-center text-text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="orange" className="w-14 h-14">
            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
            <path d="M12 7C9 7 6.5 9 5 12C6.5 15 9 17 12 17C15 17 17.5 15 19 12C17.5 9 15 7 12 7Z" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      
      <nav className="mt-8 px-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded-md bg-background text-text-primary font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded-md text-text-secondary hover:bg-background hover:text-text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Support Chat
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded-md text-text-secondary hover:bg-background hover:text-text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Classes
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded-md text-text-secondary hover:bg-background hover:text-text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Curriculum
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 