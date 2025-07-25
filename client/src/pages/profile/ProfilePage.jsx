import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import MainLayout from '../../components/MainLayout';
import { getUserProfile, updateProfile } from '../../services/index/users';
import ProfilePicture from '../../components/ProfilePicture';
import { userActions } from '../../store/reducers/userReducers';
import { toast } from 'react-hot-toast';
import { useMemo } from 'react';

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const userState = useSelector(state => state.user);

  const { data: profileData, isLoading: profileIsLoading } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ['profile'],
  });

  const { mutate, isLoading: updateProfileIsLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return updateProfile({
        token: userState.userInfo.token,
        userData: { name, email, password },
        userId: userState.userInfo._id,
      });
    },
    onSuccess: data => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem('account', JSON.stringify(data));
      queryClient.invalidateQueries(['profile']);
      toast.success('Profile is updated');
    },
    onError: error => {
      toast.error(error.message);
      console.error(error);
    },
  });

  useEffect(() => {
    if (!userState.userInfo) {
      navigate('/');
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    values: useMemo(() => {
      return {
        name: profileIsLoading ? '' : profileData.name,
        email: profileIsLoading ? '' : profileData.email,
      };
    }, [profileData?.email, profileData?.name, profileIsLoading]),
    mode: 'onChange',
  });

  const submitHandler = data => {
    const { name, email, password } = data;
    mutate({ name, email, password });
  };

  return (
    <MainLayout>
      <section className='container mx-auto px-5 py-10'>
        <div className='mx-auto w-full max-w-sm'>
          <ProfilePicture avatar={profileData?.avatar} />
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className='mb-6 flex w-full flex-col'>
              <label
                htmlFor='name'
                className='block font-semibold text-[#5a7184]'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                {...register('name', {
                  minLength: {
                    value: 1,
                    message: 'Name length must be at least 1 character',
                  },
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                })}
                placeholder='Enter name'
                className={`mt-3 block rounded-lg border px-5 py-4 font-semibold text-dark-hard outline-none placeholder:text-[#959ead] ${
                  errors.name ? 'border-red-500' : 'border-[#c3cad9]'
                }`}
              />
              {errors.name?.message && (
                <p className='mt-1 text-xs text-red-500'>
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className='mb-6 flex w-full flex-col'>
              <label
                htmlFor='email'
                className='block font-semibold text-[#5a7184]'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
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
                placeholder='Enter email'
                className={`mt-3 block rounded-lg border px-5 py-4 font-semibold text-dark-hard outline-none placeholder:text-[#959ead] ${
                  errors.email ? 'border-red-500' : 'border-[#c3cad9]'
                }`}
              />
              {errors.email?.message && (
                <p className='mt-1 text-xs text-red-500'>
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className='mb-6 flex w-full flex-col'>
              <label
                htmlFor='password'
                className='block font-semibold text-[#5a7184]'
              >
                New Password (optional)
              </label>
              <input
                type='password'
                id='password'
                {...register('password')}
                placeholder='Enter new password'
                className={`mt-3 block rounded-lg border px-5 py-4 font-semibold text-dark-hard outline-none placeholder:text-[#959ead] ${
                  errors.password ? 'border-red-500' : 'border-[#c3cad9]'
                }`}
              />
              {errors.password?.message && (
                <p className='mt-1 text-xs text-red-500'>
                  {errors.password?.message}
                </p>
              )}
            </div>
            <button
              type='submit'
              disabled={!isValid || profileIsLoading || updateProfileIsLoading}
              className='mb-6 w-full rounded-lg bg-primary px-8 py-4 text-lg font-bold text-white disabled:cursor-not-allowed disabled:opacity-70'
            >
              Update
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfilePage;
