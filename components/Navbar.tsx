'use client';
import React, { useState } from 'react';
// import { Link } from 'react-scroll/modules';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    page: 'home',
  },
  {
    label: 'About',
    page: 'about',
  },
  {
    label: 'Projects',
    page: 'projects',
  },
];

export const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navBar, setNavBar] = useState(false);

  return (
    <nav className='w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow dark:border-b dark:border-stone-600'>
      <div className='justify-between md:items-center md:flex'>
        <div>
          <div className='md:py-5 md:block'>
            <h2 className='text-2xl font-bold'>David Sackler</h2>
          </div>
        </div>
        <div className='items-center justify-center md:flex md:space-x-6'>
          <>
            {NAV_ITEMS.map((item, idx) => {
              return <a key={idx}>{item.label}</a>;
            })}
            {/* themes work only if theme provider is wrapped around the component in layout */}
            {currentTheme === 'dark' ? (
              <button
                onClick={() => setTheme('light')}
                className='bg-slate-100 p-2 rounded-xl'
              >
                <RiSunLine size={25} color='black' />
              </button>
            ) : (
              <button
                onClick={() => setTheme('dark')}
                className='bg-slate-100 p-2 rounded-xl'
              >
                <RiMoonFill size={25} color='black' />
              </button>
            )}
          </>
        </div>
      </div>
    </nav>
  );
};