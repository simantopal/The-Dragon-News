import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({categories, activeId}) => {
    return (
        <div>
            <h2 className="font-semibold text-xl">All categories</h2>
            <ul className="flex flex-col gap-2 mt-5">
                {
                    categories.news_category.map(category => {
                        return (
                        <li key={category.category_id} 
                            className={`${activeId === category.category_id && "bg-purple-500 text-white"}
                            bg-base-200 rounded-md font-medium text-center text-xl`}>

                            <Link href={`/category/${category.category_id}`} className='block p-2'>
                            {" "}
                            {category.category_name}</Link>
                        </li>)
                    })
                }
            </ul>
        </div>
    );
};

export default LeftSidebar;