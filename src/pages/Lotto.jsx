import React, { useState, useEffect } from 'react'

function formatTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 === 0 ? 12 : hours % 12;
    return `${hours12}:${minutes}:${seconds} ${ampm}`;
}

function LiveTime() {
  const [time, setTime] = useState(formatTime());
  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 1000);
    return () => clearInterval(id);
  }, []);
  return <div className="mt-2 text-lg font-mono">{time}</div>;
}

function generateNumbers() {
  const pool = Array.from({ length: 49 }, (_, i) => i + 1);
  const result = [];
  while (result.length < 6) {
    const idx = Math.floor(Math.random() * pool.length);
    result.push(pool.splice(idx, 1)[0]);
  }
  result.sort((a, b) => a - b);
  return result;
}

function LottoGenerator() {
  const [numbers, setNumbers] = useState(generateNumbers());
  return (
    <div className="mt-4">
      <div className="flex gap-2 mb-3 justify-center flex-wrap">
        {numbers.map((n) => (
          <span key={n} className="px-3 py-1 bg-straw-400 text-black font-bold rounded-full">
            {String(n).padStart(2, '0')}
          </span>
        ))}
      </div>
      <button
        onClick={() => setNumbers(generateNumbers())}
        className="mx-auto mt-3 px-6 py-3 bg-red-400 text-white text-lg font-semibold rounded-md shadow-md hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        Generate
      </button>
    </div>
  );
}

export default function Lotto() {
    return (
    <div className="flex items-center justify-center">
            <div className="bg-straw-400 rounded-lg shadow-lg p-8 w-full max-w-2xl text-center">
        <h2 className="text-2xl mb-2">Lotto Numbers</h2>
        <p className="mt-2 mb-4 text-lg font-normal">Good luck!</p>
        <LiveTime />
        <LottoGenerator />
      </div>
    </div>
    )
}
