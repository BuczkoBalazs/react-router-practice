import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({child}) {
  return (
    <div>
        <Header />
            {child}
        <Footer />
    </div>
  )
}

export default Layout