import React from 'react';
import { Sun, Moon, Sunset } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, themes, isLight, isDark, isSunset } = useTheme();

  const getTooltipText = () => {
    switch (theme) {
      case themes.LIGHT:
        return 'Switch to dark mode';
      case themes.DARK:
        return 'Switch to sunset mode';
      case themes.SUNSET:
        return 'Switch to light mode';
      default:
        return 'Toggle theme';
    }
  };

  const getCurrentThemeName = () => {
    switch (theme) {
      case themes.LIGHT:
        return 'Light';
      case themes.DARK:
        return 'Dark';
      case themes.SUNSET:
        return 'Sunset';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className='flex items-center gap-2'>
      {/* Theme Label */}
      <span className='hidden text-sm font-medium text-base-content opacity-70 sm:inline'>
        {getCurrentThemeName()}
      </span>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`btn btn-circle btn-ghost tooltip tooltip-bottom ${className}`}
        data-tip={getTooltipText()}
        aria-label={getTooltipText()}
      >
        <div className='relative h-5 w-5'>
          {/* Sun Icon for Light theme */}
          <Sun
            size={20}
            className={`absolute transition-all duration-300 ${
              isLight
                ? 'rotate-0 scale-100 opacity-100'
                : 'rotate-90 scale-0 opacity-0'
            } text-yellow-500`}
          />

          {/* Moon Icon for Dark theme */}
          <Moon
            size={20}
            className={`absolute transition-all duration-300 ${
              isDark
                ? 'rotate-0 scale-100 opacity-100'
                : '-rotate-90 scale-0 opacity-0'
            } text-blue-400`}
          />

          {/* Sunset Icon for Sunset theme */}
          <Sunset
            size={20}
            className={`absolute transition-all duration-300 ${
              isSunset
                ? 'rotate-0 scale-100 opacity-100'
                : 'rotate-180 scale-0 opacity-0'
            } text-orange-500`}
          />
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
