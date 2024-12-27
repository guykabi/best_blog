'use client';

import { useState } from 'react';
import { Button } from './Button';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useEffect } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggle = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true)
    }
  }

  return (
    <div className="h-fit">
      <Button
        Icon={
          isDark ? <MdOutlineLightMode size="20" /> : <MdOutlineDarkMode size="20" />
        }
        onAction={handleToggle}
        borderBottom={false}
      />
    </div>
  );
}
