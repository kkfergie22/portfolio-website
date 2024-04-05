'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import Logo from '../../public/images/logo/ck.png';
import Link from 'next/link';
import NavItem from './NavItem';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';

const menuList = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Work', href: '/work' },
  { text: 'Play', href: '/play' },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState<boolean | null>(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <header>
      <nav className="flex items-center justify-between">
        <div>
          <Link href="/">
            <Image src={'/images/logo/ck.png'} width={150} height={50} alt="CK Logo" priority={true} />
          </Link>
        </div>
        <div className="flex justify-between gap-20">
          <ul className={`${navActive ? 'active' : ''} nav__menu-list flex justify-between gap-10 items-center`}>
            {menuList.map((menu, idx) => (
              <li
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <Link href="#">
              <Github />
            </Link>
            <Link href="#">
              <Linkedin />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
