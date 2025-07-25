import React, { useState } from 'react';
import {
  Home,
  BookOpen,
  DollarSign,
  HelpCircle,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { images } from '../constants';
import { logout } from '../store/actions/user';
import ThemeToggle from './ThemeToggle';

const navItemsInfo = [
  { name: 'Home', type: 'link', href: '/', icon: Home },
  { name: 'Blog', type: 'link', href: '/blog', icon: BookOpen },
  { name: 'Pricing', type: 'link', href: '/pricing', icon: DollarSign },
  { name: 'Faq', type: 'link', href: '/faq', icon: HelpCircle },
];

const NavItem = ({ item }) => {
  const IconComponent = item.icon;

  return (
    <li>
      <div className='d-tooltip d-tooltip-bottom' data-tip={item.name}>
        <Link to={item.href} className='d-btn d-btn-ghost d-btn-circle'>
          <IconComponent size={20} />
        </Link>
      </div>
    </li>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [navIsVisible, setNavIsVisible] = useState(false);
  const userState = useSelector(state => state.user);
  const [profileDrowpdown, setProfileDrowpdown] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible(curState => {
      return !curState;
    });
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className='d-navbar d-bg-base-100 d-shadow-lg sticky top-0 z-50'>
      <div className='d-navbar-start'>
        <div className='d-dropdown'>
          <div
            tabIndex={0}
            role='button'
            className='d-btn d-btn-ghost lg:hidden'
            onClick={navVisibilityHandler}
          >
            {navIsVisible ? <X size={24} /> : <Menu size={24} />}
          </div>
          <ul
            tabIndex={0}
            className={`d-menu d-menu-sm d-dropdown-content d-bg-base-100 d-rounded-box z-[1] mt-3 w-52 p-2 shadow ${navIsVisible ? 'block' : 'hidden'}`}
          >
            {navItemsInfo.map(item => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
        </div>
        <Link to='/' className='d-btn d-btn-ghost text-xl'>
          <img className='w-28' src={images.Logo} alt='logo' />
        </Link>
      </div>

      <div className='d-navbar-center hidden lg:flex'>
        <ul className='d-menu d-menu-horizontal px-1'>
          {navItemsInfo.map(item => (
            <NavItem key={item.name} item={item} />
          ))}
        </ul>
      </div>

      <div className='d-navbar-end gap-2'>
        {/* Theme Toggle */}
        <ThemeToggle />

        {userState.userInfo ? (
          <div className='d-dropdown d-dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='d-btn d-btn-primary d-btn-outline'
              onClick={() => setProfileDrowpdown(!profileDrowpdown)}
            >
              <User size={18} />
              <span className='hidden sm:inline'>Account</span>
              <ChevronDown size={16} />
            </div>
            <ul
              tabIndex={0}
              className='d-menu d-dropdown-content d-bg-base-100 d-rounded-box z-[1] mt-4 w-52 p-2 shadow'
            >
              {userState?.userInfo?.admin && (
                <li>
                  <button
                    onClick={() => navigate('/admin')}
                    type='button'
                    className='flex items-center gap-2'
                  >
                    <Settings size={16} />
                    Admin Dashboard
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={() => navigate('/profile')}
                  type='button'
                  className='flex items-center gap-2'
                >
                  <User size={16} />
                  Profile Page
                </button>
              </li>
              <li>
                <button
                  onClick={logoutHandler}
                  type='button'
                  className='flex items-center gap-2'
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to='/login' className='d-btn d-btn-primary'>
            <User size={18} />
            <span className='hidden sm:inline'>Sign in</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
