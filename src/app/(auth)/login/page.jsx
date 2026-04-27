'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const {
        register, 
        handleSubmit, 
        formState: {errors}} = useForm()


    const handleLoginFunc = (data) => {
        console.log(data, "data")
    };

    console.log(errors, "errors");


    return (
        <div className='container mx-auto min-h-175 flex justify-center items-center'>
            <div className='p-4 rounded-xl bg-base-300'>
                <div className='mx-15 my-15'>
                    <h2 className='font-semibold text-4xl mb-10'>Login your account</h2>

                    <form onSubmit={handleSubmit(handleLoginFunc)}>
                        <fieldset className="fieldset">

                            <h2 className='font-semibold text-xl pt-10 border-t mb-1'>Email address</h2>
                            <input 
                                type="email"
                                className="input w-full"
                                placeholder="Enter your email address"
                                {...register("email", { required: "E-mail field is required" })} />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                            <h2 className='font-semibold text-xl mb-1 mt-4'>Password</h2>
                            <input 
                                type="password" 
                                className="input w-full"
                                placeholder="Enter your password"
                                {...register("password", { required: "Password field is required" })} />
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                        </fieldset>

                        <button className='btn bg-gray-800 text-white w-full mt-4'>Login</button>
                    </form>

                    <p className='mt-6'>Dont’t Have An Account ? 
                        <Link 
                            href={'/register'} className='text-red-400'>Register</Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;