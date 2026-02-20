"use client";

import { usePathname, useRouter } from 'next/navigation';

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="fixed bottom-8 left-0 right-0 z-[999] flex justify-center px-4">
      <nav className="glass-radio-group">
        <input type="radio" name="nav" id="nav-home" defaultChecked={pathname === '/'} />
        <label htmlFor="nav-home" onClick={() => handleClick('/')}>Home</label>
        <input type="radio" name="nav" id="nav-about" defaultChecked={pathname === '/about'} />
        <label htmlFor="nav-about" onClick={() => handleClick('/about')}>About Us</label>
        <input type="radio" name="nav" id="nav-services" defaultChecked={pathname === '/services'} />
        <label htmlFor="nav-services" onClick={() => handleClick('/services')}>Services</label>
        <input type="radio" name="nav" id="nav-contact" defaultChecked={pathname === '/contact'} />
        <label htmlFor="nav-contact" onClick={() => handleClick('/contact')}>Contact </label>
        <div className="glass-glider"></div>
      </nav>
    </div>
  );
}