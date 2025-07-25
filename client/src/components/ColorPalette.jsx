import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ColorPalette = () => {
  const { theme, isSunset } = useTheme();

  const colorSamples = [
    {
      name: 'Primary',
      bgClass: 'bg-primary',
      textClass: 'text-primary-content',
      description: 'Màu chính - Orange warm tone',
    },
    {
      name: 'Secondary',
      bgClass: 'bg-secondary',
      textClass: 'text-secondary-content',
      description: 'Màu phụ - Pink/Red accent',
    },
    {
      name: 'Accent',
      bgClass: 'bg-accent',
      textClass: 'text-accent-content',
      description: 'Màu nhấn - Purple/Magenta',
    },
    {
      name: 'Neutral',
      bgClass: 'bg-neutral',
      textClass: 'text-neutral-content',
      description: 'Màu trung tính - Dark blue-gray',
    },
    {
      name: 'Base 100',
      bgClass: 'bg-base-100',
      textClass: 'text-base-content',
      description: 'Nền chính - Dark blue',
    },
    {
      name: 'Base 200',
      bgClass: 'bg-base-200',
      textClass: 'text-base-content',
      description: 'Nền nhạt hơn',
    },
    {
      name: 'Base 300',
      bgClass: 'bg-base-300',
      textClass: 'text-base-content',
      description: 'Nền tối nhất',
    },
    {
      name: 'Info',
      bgClass: 'bg-info',
      textClass: 'text-info-content',
      description: 'Thông tin - Light blue',
    },
    {
      name: 'Success',
      bgClass: 'bg-success',
      textClass: 'text-success-content',
      description: 'Thành công - Light green',
    },
    {
      name: 'Warning',
      bgClass: 'bg-warning',
      textClass: 'text-warning-content',
      description: 'Cảnh báo - Light yellow',
    },
    {
      name: 'Error',
      bgClass: 'bg-error',
      textClass: 'text-error-content',
      description: 'Lỗi - Light red',
    },
  ];

  return (
    <div className='rounded-lg bg-base-100 p-6 shadow-lg'>
      <div className='mb-6'>
        <h2 className='mb-2 text-2xl font-bold text-base-content'>
          🌅 Sunset Theme - Color Palette
        </h2>
        <p className='text-base-content opacity-70'>
          Current theme: <span className='font-semibold'>{theme}</span>
          {isSunset && ' ✨'}
        </p>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {colorSamples.map(color => (
          <div
            key={color.name}
            className={`${color.bgClass} ${color.textClass} rounded-lg p-4 shadow-md transition-all duration-300 hover:scale-105`}
          >
            <h3 className='mb-1 text-lg font-bold'>{color.name}</h3>
            <p className='mb-2 text-sm opacity-90'>{color.description}</p>
            <div className='text-xs opacity-75'>
              <div>
                Background: <code>{color.bgClass}</code>
              </div>
              <div>
                Text: <code>{color.textClass}</code>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Theme specific info */}
      {isSunset && (
        <div className='mt-6 rounded-lg bg-primary p-4 text-primary-content'>
          <h3 className='mb-2 font-bold'>🌅 Theme Sunset đặc biệt</h3>
          <p className='text-sm'>
            Theme này sử dụng color space OKLCH để tạo ra những tông màu ấm áp
            như hoàng hôn, với base tối xanh đen và các accent màu cam, hồng,
            tím đẹp mắt.
          </p>
        </div>
      )}
    </div>
  );
};

export default ColorPalette;
