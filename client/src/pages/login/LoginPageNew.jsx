import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import MainLayout from '../../components/MainLayout';
import { login } from '../../services/index/users';
import { userActions } from '../../store/reducers/userReducers';
import { images } from '../../constants';

const LoginPageNew = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => {
      return login({ email, password });
    },
    onSuccess: data => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem('account', JSON.stringify(data));
    },
    onError: error => {
      toast.error(error.message);
      console.error(error);
    },
  });

  useEffect(() => {
    if (userState.userInfo) {
      navigate('/');
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const submitHandler = data => {
    const { email, password } = data;
    mutate({ email, password });
  };

  return (
    <MainLayout>
      <section
        class='inset-0 flex h-screen items-center justify-center bg-cover bg-no-repeat'
        style={{ backgroundImage: "url('/assets/images/bg.png')" }}
      >
        <form onSubmit={handleSubmit(submitHandler)}>
          <div class='container xl:px-52 2xl:px-80'>
            <div
              class='rounded-lg bg-white p-5'
              style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
            >
              <div class='grid gap-6 lg:grid-cols-3 xl:grid-cols-5'>
                <div class='hidden lg:col-span-1 lg:block xl:col-span-2'>
                  <div class='flex h-full w-full flex-col justify-between gap-10 rounded-lg bg-[#1e1e1e] p-7 text-white'>
                    <span class='flex items-center justify-center font-semibold uppercase tracking-widest'>
                      <img className='w-28' src={images.LogoWhite} alt='logo' />
                    </span>

                    <div>
                      <h1 class='mb-4 text-3xl/tight'>
                        Explore our blog and share your thoughts
                      </h1>
                      <p class='font-normal leading-relaxed text-gray-200'>
                        We are here to help you and we'd love to connect with
                        you.
                      </p>
                    </div>

                    <div>
                      <div class='rounded-lg bg-black/50 p-5'>
                        <p class='leading mb-4 text-sm font-normal text-gray-200'>
                          "Every post is a journey of discovery. Join us as we
                          explore stories filled with inspiration and
                          knowledge."
                        </p>
                        <div class='flex items-center gap-4'>
                          <img
                            src='assets/images/user.png'
                            alt=''
                            class='h-12 rounded-lg'
                          />
                          <div>
                            <p class='font-normal'>Văn Lộc</p>
                            <span class='text-xs font-normal'>
                              Developer / Blogger
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='my-auto lg:col-span-2 lg:mx-10 xl:col-span-3'>
                  <div>
                    <h1 class='mb-3 text-2xl/tight'>Sign In</h1>
                    <p class='text-sm font-medium leading-relaxed'>
                      We are here to help you and we'd love to connect with you.
                    </p>
                  </div>

                  <div class='mt-10 space-y-5'>
                    <div>
                      <label class='mb-2 block text-sm font-medium' for='email'>
                        Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Enter Your Email'
                        {...register('email', {
                          pattern: {
                            value:
                              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Enter a valid email',
                          },
                          required: {
                            value: true,
                            message: 'Email is required',
                          },
                        })}
                        className={`w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-500 focus:border-gray-400 focus:ring-0 ${
                          errors.email ? 'border-red-500' : 'border-[#c3cad9]'
                        }`}
                      />
                      {errors.email?.message && (
                        <p className='mt-1 text-xs text-red-500'>
                          {errors.email?.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <div class='mb-2 flex items-center justify-between'>
                        <label class='text-sm font-medium' for='pwd'>
                          Password
                        </label>
                        <Link
                          to='/forget-password'
                          className='text-sm font-medium text-gray-500'
                        >
                          Forget your password?
                        </Link>
                      </div>
                      <input
                        type='password'
                        id='pwd'
                        name='pwd'
                        placeholder='Enter Your Password'
                        {...register('password', {
                          required: {
                            value: true,
                            message: 'Password is required',
                          },
                          minLength: {
                            value: 6,
                            message:
                              'Password length must be at least 6 characters',
                          },
                        })}
                        className={`w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-500 focus:border-gray-400 focus:ring-0 ${
                          errors.password
                            ? 'border-red-500'
                            : 'border-[#c3cad9]'
                        }`}
                      />
                      {errors.password?.message && (
                        <p className='mt-1 text-xs text-red-500'>
                          {errors.password?.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div class='mt-8 flex flex-wrap items-center justify-between gap-6'>
                    <button
                      type='submit'
                      disabled={!isValid || isLoading}
                      class='rounded-lg bg-[#1e1e1e] px-6 py-2.5 text-sm text-white'
                    >
                      Sign In
                    </button>
                    <p class='text-sm text-gray-500'>
                      Don't have an account?{' '}
                      <Link
                        to='/register'
                        class='ms-2 text-[#1e1e1e] underline'
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </MainLayout>
  );
};

export default LoginPageNew;
