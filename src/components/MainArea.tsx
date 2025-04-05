import React, { useState } from 'react';
import BloomTechLogo from './BloomTechLogo';

interface MainAreaProps {
  curriculumUrl?: string;
}

const MainArea: React.FC<MainAreaProps> = ({ curriculumUrl = 'https://example.com' }) => {
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex-1 px-6 pb-6">
        <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full relative">
          {loading && (
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-background bg-opacity-90 z-10">
              <BloomTechLogo className="h-16 w-auto mb-6" />
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-accent"></div>
            </div>
          )}
          
          <div className="h-full">
            <iframe 
              src={curriculumUrl} 
              className="w-full h-full min-h-[600px] border-0"
              title="Curriculum Content"
              onLoad={handleIframeLoad}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainArea; 