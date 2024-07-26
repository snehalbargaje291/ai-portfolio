'use client';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = theme === 'dark';

  const handleToggle = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  if (!mounted) {
    return null;
  }

  return (
    <label
      htmlFor="theme-toggle"
      className="relative inline-block h-8 w-16 cursor-pointer rounded-full border border-foreground transition-colors"
    >
      <input
        type="checkbox"
        id="theme-toggle"
        className="peer sr-only"
        checked={isDarkMode}
        onChange={handleToggle}
      />

      <span
        className={`absolute inset-y-0 start-0 z-10 m-1 inline-flex items-center justify-center rounded-full transition-all ${
          isDarkMode ? 'text-yellow-400 peer-checked:start-8' : 'text-gray-600 peer-checked:start-8'
        }`}
      >
        {isDarkMode ? (
          <Sun className="h-4 w-6 block" />
        ) : (
          <Moon className="h-4 w-6 block" />
        )}
      </span>
    </label>
  );
};

export default ThemeToggle;
