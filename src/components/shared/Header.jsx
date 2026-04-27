import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='text-center py-8 space-y-2'>
            <Image src={logo} width={471} height={60} alt='logo' className='mx-auto'></Image>
            <p>Journalism Without Fear or Favour</p>
            <p className='font-medium text-xl'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;