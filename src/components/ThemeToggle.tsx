'use client';
import { useTheme } from 'next-themes';
import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === 'dark';

  const handleToggle = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <label
      htmlFor="theme-toggle"
      className="relative inline-block h-8 w-16 cursor-pointer rounded-full border transition-colors"
    >
      <input
        type="checkbox"
        id="theme-toggle"
        className="peer sr-only"
        checked={isDarkMode}
        onChange={handleToggle}
      />

      <span
        className={`absolute inset-y-0 start-0 z-10 m-1 inline-flex items-center justify-center rounded-full text-gray-400 transition-all ${isDarkMode ? ' text-yellow-300' : ' text-gray-700'} peer-checked:start-8`}
      >
        <Moon
          className={`h-4 w-6 ${isDarkMode ? 'hidden' : 'block'}`}
        />
        <Sun
          className={`h-4 w-6 ${isDarkMode ? 'block' : 'hidden'}`}
        />
      </span>
    </label>
  );
};

export default ThemeToggle;
