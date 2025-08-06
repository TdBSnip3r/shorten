import React from "react";

const SlugTableNoElementBanner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-gray-500 bg-gray-50 rounded-lg shadow-inner">
      <svg
        className="w-16 h-16 mb-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        ></path>
      </svg>
      <h3 className="text-lg font-semibold mb-2">Nessuno slug trovato</h3>
      <p className="text-sm text-center">
        Non hai ancora creato alcuno slug personalizzato.
      </p>
    </div>
  );
};

export default SlugTableNoElementBanner;