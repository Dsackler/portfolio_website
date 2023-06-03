'use client';
import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function Page() {
  const [viewKey, setViewKey] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setViewKey(!viewKey);
    setClicked(true);
  };

  const model = {
    id: '',
  };
  model.id = nanoid();
  console.log(model.id);
  return (
    <div className='flex flex-col justify-center items-center mt-40'>
      <h1>Get your API key here:</h1>
      <div className='mt-10'>
        <button
          onClick={handleClick}
          disabled={clicked}
          className={`text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow cursor-pointer ${
            clicked ? 'opacity-50 cursor-default' : 'hover:bg-teal-700'
          }`}
        >
          Generate Key
        </button>
      </div>
      {viewKey && model.id}
      <div>
        <h1 className='font-bold text-4xl'>API documentation</h1>
        <p>Just send a get request to url/api/*apikey* you dingus</p>
      </div>
    </div>
  );
}
