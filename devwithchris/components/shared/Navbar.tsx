import React from 'react';
import Image from 'next/image';
import Logo from '../../public/images/logo/ck.png';

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between mx-auto container">
        <div>
          <a href="#">
            <Image width={150} height={50} src={Logo} alt="website logo" />
          </a>
        </div>
        {/* <div>
          <Image width={150} height={150} alt="Menu" />
        </div> */}
        <div className="hidden">
          <ul className="flex gap-5 p-5 text-ck">
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Play</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
