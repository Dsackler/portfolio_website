import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
  {
    name: 'Blogger',
    description:
      'Fullstack nextjs webapp that allows you to blog your thoughts',
    image: '/blogger.png',
    github: 'https://github.com/Dsackler/Blogging_platform',
    link: 'https://google.com',
  },
  {
    name: 'Top Movies',
    description:
      'Fullstack nextjs webapp that fetches the top rated movies from The Movie DB',
    image: '/film-reel.png',
    github: 'https://github.com/Dsackler/top_movies',
    link: 'https://google.com',
  },
];

export const ProjectsSection = () => {
  return (
    <section id='projects'>
      <h1 className='text-center font-bold text-4xl'>
        Projects
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
      </h1>
      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset='300px 0px -300px 0px'>
                <div className='flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                  <div className='mt-8 md:w-1/2'>
                    <Link href={project.link} target='_blank'>
                      <Image
                        src={project.image}
                        className='rounded-xl shadow-xl hover:opacity-70'
                        width={500}
                        height={500}
                        alt=''
                      />
                    </Link>
                  </div>
                  <div className='mt-12 md:w-1/2'>
                    <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                    <p className='text-xl leading-7 mb-4'>
                      {project.description}
                    </p>
                    <div className='flex flex-row align-bottom space-x-4'>
                      <Link href={project.github} target='_blank'>
                        <BsGithub
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                      <Link href={project.link} target='_blank'>
                        <BsArrowUpRightSquare
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};
