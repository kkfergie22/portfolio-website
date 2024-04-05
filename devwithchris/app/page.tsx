import Navbar from '@/components/shared/Navbar';
import React from 'react';

const Homepage = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <main>
          <h1>Homepage</h1>
        </main>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    </>
  );
};

export default Homepage;
