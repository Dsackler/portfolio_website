import React from 'react';
import Image from 'next/image';

const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'Python' },
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Git' },
  { skill: 'GitHub' },
  { skill: 'Jupyter Notebooks' },
];

export const AboutSection = () => {
  return (
    <section id='about'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>
          About Me
          <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        </h1>
        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
          <div className='md: w-1/2'>
            <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
              Get to know me!
            </h1>
            <p>
              My name is David and I'm based is Los Angeles, CA. I work well in
              both
              <span className='font-bold'> group collaborative</span> and
              <span className='font-bold'> independent settings</span>. In small
              groups, I excel at contributing technical solutions and
              effectively communicate with my team to overcome technical
              challenges. I am a confident public speaker and I have the ability
              to communicate my ideas both verbally and in writing. When given a
              problem to solve, I look for creative solutions and work
              diligently until the problem is resolved.
            </p>
          </div>
          <div className='md:w-1/2'>
            <h1 className='text-2xl font-bold mb-6'>My Skills</h1>
            <div className='flex flex-wrap flex-row justify center md: justify-start pb-4'>
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              className='rounded-md hidden md:block md:relative md:bottom-2 md:left-10 md:z-0'
              src='/Programmer-image.jpg'
              alt=''
              width={325}
              height={325}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
