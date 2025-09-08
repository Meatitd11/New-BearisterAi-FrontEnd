import React from 'react';
import ChatInterface from "./chatInterface"

const MainContent = () => {
  return (
    <main className="flex-1 flex flex-col">
      <div className="flex-1 flex flex-col justify-start items-center px-6 sm:px-8 lg:px-10 py-6 sm:py-8 app-scrollable" style={{ backgroundColor: '#121926', color: '#e3e8ef'}}>
        <div className="w-full mx-auto">
        <ChatInterface/>
        </div>
      </div>
    </main>
  );
};

export default MainContent;