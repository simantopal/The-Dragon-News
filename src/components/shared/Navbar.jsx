import Link from 'next/link';
import React from 'react';
import Avatar from "@/assets/user.png";
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto mt-6'>
            <div></div>
            <ul className='flex justify-between items-center gap-3 text-base-700 text-lg'>
                <li>
                    <NavLink href={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink href={'/career'}>Career</NavLink>
                </li>
            </ul>

            <div className='flex items-center gap-2'>
                <Image src={Avatar} alt='avatar' width={41} height={41}></Image>
                <button className='btn bg-gray-700 text-white'>
                    <Link href={"/login"}>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;