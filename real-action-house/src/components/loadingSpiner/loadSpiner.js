import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <div className="relative flex items-center justify-center mb-6">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-300 border-opacity-50"></div>
        <div className="absolute rounded-full h-16 w-16 bg-blue-300"></div>
      </div>
      <p className="text-2xl font-semibold text-gray-800 shadow-md animate-bounce">
        Aguarde por favor...
      </p>
    </div>
  );
};

export default LoadingSpinner;
