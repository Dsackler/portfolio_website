'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Link as _link } from 'react-scroll/modules';
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
    <nav className='w-full mx-auto px-4 sm:px-20 top-0 fixed z-50 shadow bg-stone-400 dark:border-b dark:border-stone-600'>
      <div className='justify-between md:items-center md:flex'>
        <div>
          <div className='flex items-center justify-between py-3'>
            <Link href={'/'}>
              <div className='md:py-5 md:block'>
                <h2 className='text-2xl font-bold'>David Sackler</h2>
              </div>
            </Link>
            <div className='md:hidden'>
              <button onClick={() => setNavBar(!navBar)}>
                {navBar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:m-0 ${
              navBar ? 'block' : 'hidden'
            }`}
          >
            <div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              <>
                {NAV_ITEMS.map((item, idx) => {
                  return (
                    <_link
                      key={idx}
                      to={item.page}
                      className={
                        'block lg:inline-block hover:text-neutral-500 cursor-pointer'
                      }
                      activeClass='active'
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => setNavBar(!navBar)}
                    >
                      {item.label}
                    </_link>
                  );
                })}
                <Link href={'/dev_api'}>
                  <p className='hover:text-neutral-500'>API</p>
                </Link>
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
        </div>
      </div>
    </nav>
  );
};
