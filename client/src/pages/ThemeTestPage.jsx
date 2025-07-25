import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ColorPalette from '../components/ColorPalette';
import ThemeToggle from '../components/ThemeToggle';

const ThemeTestPage = () => {
  const { theme, themes, setTheme } = useTheme();

  return (
    <div className='min-h-screen bg-base-200 py-8'>
      <div className='container mx-auto max-w-6xl px-4'>
        {/* Header */}
        <div className='mb-8 text-center'>
          <h1 className='mb-4 text-4xl font-bold text-base-content'>
            🌅 DaisyUI Sunset Theme Demo
          </h1>
          <p className='mb-6 text-base-content opacity-70'>
            Test và khám phá bảng màu Sunset với các component UI
          </p>

          {/* Theme Selection */}
          <div className='mb-6 flex items-center justify-center gap-4'>
            <span className='font-medium text-base-content'>Chọn theme:</span>
            {Object.entries(themes).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setTheme(value)}
                className={`btn btn-sm ${
                  theme === value ? 'btn-primary' : 'btn-ghost'
                }`}
              >
                {key === 'LIGHT' && '☀️'}
                {key === 'DARK' && '🌙'}
                {key === 'SUNSET' && '🌅'}
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </button>
            ))}
            <ThemeToggle />
          </div>
        </div>

        {/* Color Palette */}
        <div className='mb-12'>
          <ColorPalette />
        </div>

        {/* UI Components Demo */}
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {/* Buttons Section */}
          <div className='card bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title text-base-content'>🔘 Buttons</h2>
              <div className='space-y-4'>
                <div className='flex flex-wrap gap-2'>
                  <button className='btn btn-primary'>Primary</button>
                  <button className='btn btn-secondary'>Secondary</button>
                  <button className='btn btn-accent'>Accent</button>
                  <button className='btn btn-neutral'>Neutral</button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <button className='btn btn-info'>Info</button>
                  <button className='btn btn-success'>Success</button>
                  <button className='btn btn-warning'>Warning</button>
                  <button className='btn btn-error'>Error</button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <button className='btn btn-primary btn-outline'>
                    Outline
                  </button>
                  <button className='btn btn-ghost'>Ghost</button>
                  <button className='btn btn-link'>Link</button>
                </div>
              </div>
            </div>
          </div>

          {/* Alerts Section */}
          <div className='card bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title text-base-content'>🚨 Alerts</h2>
              <div className='space-y-3'>
                <div className='alert alert-info'>
                  <span>Thông tin: Theme sunset đang hoạt động!</span>
                </div>
                <div className='alert alert-success'>
                  <span>Thành công: Theme đã được áp dụng!</span>
                </div>
                <div className='alert alert-warning'>
                  <span>Cảnh báo: Màu sắc có thể thay đổi!</span>
                </div>
                <div className='alert alert-error'>
                  <span>Lỗi: Đây chỉ là demo!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Elements */}
          <div className='card bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title text-base-content'>📝 Form Elements</h2>
              <div className='space-y-4'>
                <input
                  type='text'
                  placeholder='Text input'
                  className='input input-bordered input-primary w-full'
                />
                <select className='select select-bordered select-secondary w-full'>
                  <option disabled selected>
                    Select option
                  </option>
                  <option>Light Theme</option>
                  <option>Dark Theme</option>
                  <option>Sunset Theme</option>
                </select>
                <textarea
                  className='textarea textarea-bordered textarea-accent'
                  placeholder='Textarea'
                ></textarea>
                <div className='form-control'>
                  <label className='label cursor-pointer'>
                    <span className='label-text'>Enable sunset mode</span>
                    <input
                      type='checkbox'
                      className='toggle toggle-primary'
                      defaultChecked
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Progress & Loading */}
          <div className='card bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title text-base-content'>
                📊 Progress & Loading
              </h2>
              <div className='space-y-4'>
                <progress
                  className='progress progress-primary w-full'
                  value='70'
                  max='100'
                ></progress>
                <progress
                  className='progress progress-secondary w-full'
                  value='40'
                  max='100'
                ></progress>
                <progress
                  className='progress progress-accent w-full'
                  value='90'
                  max='100'
                ></progress>

                <div className='flex gap-4'>
                  <span className='loading loading-spinner loading-lg text-primary'></span>
                  <span className='loading loading-dots loading-lg text-secondary'></span>
                  <span className='loading loading-ring loading-lg text-accent'></span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className='card bg-base-100 shadow-xl lg:col-span-2'>
            <div className='card-body'>
              <h2 className='card-title text-base-content'>📈 Stats</h2>
              <div className='stats bg-base-200 shadow'>
                <div className='stat'>
                  <div className='stat-figure text-primary'>🌅</div>
                  <div className='stat-title'>Theme</div>
                  <div className='stat-value text-primary'>Sunset</div>
                  <div className='stat-desc'>OKLCH Color Space</div>
                </div>

                <div className='stat'>
                  <div className='stat-figure text-secondary'>🎨</div>
                  <div className='stat-title'>Colors</div>
                  <div className='stat-value text-secondary'>11</div>
                  <div className='stat-desc'>Semantic Color Palette</div>
                </div>

                <div className='stat'>
                  <div className='stat-figure text-accent'>✨</div>
                  <div className='stat-title'>Experience</div>
                  <div className='stat-value text-accent'>Premium</div>
                  <div className='stat-desc'>Dark Mode UI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='mt-12 rounded-lg bg-base-100 py-6 text-center'>
          <p className='text-base-content opacity-70'>
            🌅 Sunset Theme được tạo với DaisyUI và OKLCH color space
          </p>
          <p className='mt-2 text-sm text-base-content opacity-50'>
            Current theme: <span className='font-mono font-bold'>{theme}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemeTestPage;
