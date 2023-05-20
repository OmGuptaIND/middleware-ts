import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="h-full grid place-content-center select-none gap-3">
      <p>Working in progress</p>
      <div className="grid place-content-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-base w-fit px-3 py-2 rounded-lg shadow-md transition-all duration-150">
          <Link href="/">Go Back To Home</Link>
        </button>
      </div>
    </div>
  );
};

export default page;
