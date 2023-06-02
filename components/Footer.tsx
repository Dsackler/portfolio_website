import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0'></hr>
      <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
        <div className='flex flex-row items-center justify-center space-x-1 text-neutral-500'>
          © 2023 David Sackler
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
          <a
            href='https://github.com/Dsackler'
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineGithub
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500'
              size={30}
            />
          </a>

          <a
            href='https://www.linkedin.com/in/david-sackler-80b780194/'
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineLinkedin
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500'
              size={30}
            />
          </a>
        </div>
      </div>
      <a
        className='text-neutral-500'
        href='https://www.freepik.com/free-vector/binary-code-concept-illustration_15581993.htm#query=programmer%20illustration&position=4&from_view=keyword&track=ais'
      >
        Image by storyset on Freepik
      </a>{' '}
    </footer>
  );
};
