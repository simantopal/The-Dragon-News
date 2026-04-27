'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const {
        register, 
        handleSubmit, 
        formState: {errors}} = useForm()


    const handleRegisterFunc = (data) => {
        console.log(data, "data")
        const {email, name, photo, password} = data;
        console.log(name, photo);
    };


    return (
        <div className='container mx-auto min-h-175 flex justify-center items-center'>
            <div className='p-4 rounded-xl bg-base-300'>
                <div className='mx-15 my-15'>
                    <h2 className='font-semibold text-4xl mb-10'>Register your account</h2>

                    <form onSubmit={handleSubmit(handleRegisterFunc)}>
                        <fieldset className="fieldset">

                            <h2 className='font-semibold text-xl pt-10 border-t mb-1'>Your Name</h2>
                            <input 
                                type="name"
                                className="input w-full"
                                placeholder="Enter your name"
                                {...register("name", { required: "Name field is required" })} />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                            <h2 className='font-semibold text-xl mb-1 mt-4'>Photo URL</h2>
                            <input 
                                type="text"
                                className="input w-full"
                                placeholder="Enter your photo url"
                                {...register("photo", { required: "Photo url field is required" })} />
                                {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}

                            <h2 className='font-semibold text-xl mb-1 mt-4'>Email address</h2>
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

                        <button className='btn bg-gray-800 text-white w-full mt-4'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;