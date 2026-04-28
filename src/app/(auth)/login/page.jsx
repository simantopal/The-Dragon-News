'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm()

    const [isShowPassword, setIsShowPassword] = useState(false);


    const handleLoginFunc = async (data) => {
        console.log(data, "data")

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res, error);

        if(error){
            alert(error.message)
        }
        if(res){
            alert("Signin successful");
        }
    };

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

                            {errors.email && (
                                <p className='text-red-500'>{errors.email.message}</p>
                            )}
                        </fieldset>
                        <fieldset className="fieldset relative">
                            <h2 className='font-semibold text-xl mb-1 mt-4'>Password</h2>
                            <input
                                type={isShowPassword ? "text" : "password"}
                                className="input w-full"
                                placeholder="Enter your password"
                                {...register("password", { required: "Password field is required" })} />

                            {/* <span className='absolute right-2 top-17 text-lg cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>
                                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                            </span> */}

                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                        </fieldset>

                        <button className='btn bg-gray-800 text-white w-full mt-4'>Login</button>
                    </form>

                    <p className='mt-6'>Dont’t Have An Account ?
                        <Link
                            href={'/register'} className='text-red-400'> Register</Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;