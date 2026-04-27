import Image from 'next/image';
import Swimming from "@/assets/swimming.png";
import Class from "@/assets/class.png";
import PlayGround from "@/assets/playground.png";
import bg from "@/assets/bg.png";
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';


const RightSidebar = () => {
    return (
        <div>
            <h2 className='font-bold text-xl'>Login with</h2>
            <div className='flex flex-col gap-2 mt-5'>
                <button className='btn border-blue-500 text-blue-500'><FaGoogle />Login with Google</button>
                <button className='btn border-gray-500'><FaGithub />Login with Github</button>
            </div>
            <div className='mt-7.5'>
                <h2 className='font-semibold text-xl'>Find Us On</h2>
                <div className="mt-5 border rounded-md overflow-hidden">

                    <div className="flex items-center gap-3 p-3 border-b hover:bg-gray-50 cursor-pointer">
                        <FaFacebook className="text-blue-600" />
                        <p className="font-medium text-gray-500">Facebook</p>
                    </div>

                    <div className="flex items-center gap-3 p-3 border-b hover:bg-gray-50 cursor-pointer">
                        <FaTwitter className="text-sky-500" />
                        <p className="font-medium text-gray-500">Twitter</p>
                    </div>

                    <div className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer">
                        <FaInstagram className="text-pink-500" />
                        <p className="font-medium text-gray-500">Instagram</p>
                    </div>

                </div>
            </div>

            <div className='bg-base-300 mt-5'>
                <h2 className='font-semibold text-xl mb-5 p-2'>Q-Zone</h2>
                <div className='space-y-5'>
                    <Image src={Swimming} alt='swimming' className='w-full object-cover rounded-md'></Image>
                    <Image src={Class} alt='class' className='w-full object-cover rounded-md'></Image>
                    <Image src={PlayGround} alt='playground' className='w-full object-cover rounded-md'></Image>
                </div>
            </div>

            <div className='mt-5'>
                <Image src={bg} alt='bg' className='w-full'></Image>
            </div>
        </div>
    );
};

export default RightSidebar;