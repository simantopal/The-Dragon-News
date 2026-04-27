import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export const generateMetadata = async({params}) => {
  const { id } = await params;
  console.log(id, 'params');
  const news = await getNewsDetailsById(id);
  console.log(news, 'news');

  return{
    title: news.title,
    description: news.details,
  };
};


const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id, 'paramsRes');

    const news = await getNewsDetailsById(id);
    // console.log(news, 'newss');

    return (
        <div className='max-w-5xl container mx-auto my-8'>
            <h2 className='font-semibold text-xl mb-5'>Dragon News</h2>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <figure>
                        <Image
                            src={news.image_url}
                            alt={news.title}
                            width={1000}
                            height={1000}
                            className='w-full mt-5' />
                    </figure>
                    <h2 className="card-title font-bold text-xl mt-5">{news.title}</h2>
                    <p className='mt-8 mb-5'>{news.details}</p>

                    <div className='flex items-center gap-2 justify-between border-t'>
            
                        <Link href={`/category/${news.category_id}`}>
                            <button className='btn mt-5 bg-pink-700 text-white'><FaArrowLeft />All news in this category</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsDetailsPage;