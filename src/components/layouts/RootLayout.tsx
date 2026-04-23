import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../ScrollToTop';

const RootLayout = () => {
  const [mounted, setMounted] = useState(false);
  
  // Add animation effects when the layout mounts
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground pt-0 m-0 font-sans transition-colors duration-500">
     
      <Header />

      <ScrollToTop/>
      
      <main className="flex-grow relative">
        
        {/* Main content with subtle fade-in animation */}
        <div 
          className={`transition-opacity duration-500 ease-in-out relative z-10 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Outlet />
        </div>
        
      </main>
      
      <Footer />
    </div>
  );
};

export default RootLayout;
