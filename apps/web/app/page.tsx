'use client';
import Link from 'next/link';

import { add } from '@middleware-ts/web-core';

export default function Page() {
  const handleClick = (a: number, b: number) => {
    alert(add(a, b));
  };

  return (
    <div className="bg-black h-screen">
      <div className="h-full grid place-content-center text-white gap-3">
        <p className="text-base select-none font-mono">
          Welcome to the test version of the new{' '}
          <u className="cursor-pointer">
            <b>HuddleClient</b>
          </u>
        </p>
        <div
          onClick={() => handleClick(2, 3)}
          className="grid place-content-center font-semibold"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-base w-fit px-3 py-2 rounded-lg shadow-md transition-all duration-150">
            <p>Test Package working</p>
          </button>
        </div>
        <div className="grid place-content-center font-semibold">
          <button className="bg-blue-600 hover:bg-blue-700 text-base w-fit px-3 py-2 rounded-lg shadow-md transition-all duration-150">
            <Link href="/test">Test the Version</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
