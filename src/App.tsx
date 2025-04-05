import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import MainArea from './components/MainArea'
import Login from './components/Login'
import { useAuth } from './AuthContext'

function App() {
  const { currentUser, loading } = useAuth();
  const [curriculumUrl] = useState('https://decagondev.github.io/master-curriculum-list/');

  if (loading) {
    // Optional: Add a full-page loading indicator here
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-accent"></div>
      </div>
    )
  }

  if (!currentUser) {
    return <Login />;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <MainArea curriculumUrl={curriculumUrl} />
      </div>
    </div>
  )
}

export default App
