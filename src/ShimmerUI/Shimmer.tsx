import React from "react";
import '../styles/index.css'; // Ensure to import your CSS styles

const Shimmer: React.FC =  () => {
  return (
    <div className="relative min-h-screen bg-gray-100 p-6">
      {/* Phantom Shimmer Cards */}
      <div className="flex flex-col gap-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="phantom-card w-full h-40 rounded-lg shadow-md bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:400%_100%] animate-[shimmer_1.5s_infinite]"
          />
        ))}
      </div>

      {/* Centered Donut Spinner */}
      <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-400 border-t-transparent rounded-full animate-spin" />
        <p className="mt-4 text-gray-700 font-medium text-sm">Loading...</p>
      </div>
    </div>
  );
}

export default Shimmer;

