'use client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    const { email, password } = data;
    console.log(email, password);
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <div className="text-center lg:text-left lg:w-full">
            <img
              className="w-full"
              src={'/assets/images/login/login.svg'}
              alt=""
            />
          </div>
          <div className="card shrink-0 w-full md:w-2/3 lg:w-1/2 shadow-2xl bg-base-100">
            <h2 className="text-4xl font-semibold text-center pt-4 text-[#FF3811]">
              Login Now
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register('email', { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register('password', { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="bg-[#FF3811] btn text-white "
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="flex gap-2 items-center px-6">
              <div className="border-t w-full"></div>
              <div>or</div>
              <div className="border-b w-full"></div>
            </div>
            <div className="flex gap-6  mt-3 items-center justify-center mb-3">
              <FaFacebook className="text-5xl btn rounded-full p-1" />
              <FaGithub className="text-5xl btn rounded-full p-1"></FaGithub>

              <FcGoogle className="text-5xl btn rounded-full p-0" />
            </div>
            <h2 className="text-center mb-6 mt-3">
              Have an account?
              <Link href={'/signup'}>
                <button className="text-blue-600 font-semibold">
                  Register
                </button>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
