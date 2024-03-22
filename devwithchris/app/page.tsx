import Navbar from '@/components/shared/Navbar';
import React from 'react';

const Homepage = () => {
  return (
    <>
      <header className="border">
        <Navbar />
      </header>
      <main>
        <h1>Homepage</h1>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default Homepage;
