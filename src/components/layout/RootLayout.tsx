import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingContactButtons from '../shared/FloatingContactButtons';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
};

export default RootLayout;
