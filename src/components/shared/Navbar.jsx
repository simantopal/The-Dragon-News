'use client'
import Link from 'next/link';
import React from 'react';
import Avatar from "@/assets/user.png";
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log(user, isPending, "user");

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

            {isPending ? (<span className="loading loading-spinner text-primary"></span>) : user ? (
                <div className='flex items-center gap-2'>
                    <h2>Hello, {user.name}</h2>
                    <Image
                        src={user.image || Avatar}
                        alt='avatar'
                        width={41}
                        height={41}>
                    </Image>
                    <button className='btn bg-gray-700 text-white' onClick={async () => await authClient.signOut()}>Logout</button>
                </div>
            ) : (
                <button className='btn bg-gray-700 text-white'>
                    <Link href={"/login"}>Login</Link>
                </button>
            )}
        </div>
    );
};

export default Navbar;