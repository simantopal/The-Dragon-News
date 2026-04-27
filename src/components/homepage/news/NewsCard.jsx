import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    console.log(news, 'news');
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className='flex justify-between items-center bg-base-300 p-4'>
                <div className='flex gap-3 items-center'>
                    <Image
                        src={news.author?.img}
                        alt={news.author?.name}
                        height={40}
                        width={40}
                        className='rounded-full'>
                    </Image>
                    <div>
                        <h2 className='font-semibold'>{news.author?.name}</h2>
                        <p className='text-sm'>{news.author?.published_date}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-1'>
                    <CiBookmark className='text-2xl' />
                    <CiShare2 className='text-2xl' />

                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title font-bold text-xl">{news.title}</h2>

                <figure>
                    <Image
                        src={news.image_url}
                        alt={news.title}
                        width={1000}
                        height={1000}
                        className='w-full mt-5' />
                </figure>
                <p className='mt-8 line-clamp-4 mb-5'>{news.details}</p>

                <div className='flex items-center gap-2 justify-between border-t'>
                    <div className='flex items-center gap-5 mt-5'>
                        <h2 className='flex items-center gap-1'>
                            <FaStar className='text-orange-400 textxl' />
                            <FaStar className='text-orange-400' />
                            <FaStar className='text-orange-400' />
                            <FaStar className='text-orange-400' />
                            <FaStar className='text-orange-400' />
                            {news.rating.number}</h2>
                        <h2 className='flex items-center gap-1'><FaEye className='text-lg' />{news.total_view}</h2>
                    </div>
                    <Link href={`/news/${news._id}`}>
                        <button className='btn mt-5'>See more</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;