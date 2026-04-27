import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        _id: "1",
        title: "Breaking News: Maajor Event unfolds in the city",
    },
    {
        _id: "2",
        title: "Breaking News: New AI tool launched for developers",
    },
    {
        _id: "3",
        title: "Breaking News: Local team wins championship final",
    }
]

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-base-200 p-4 container mx-auto'>
            <button className='btn bg-pink-700 text-white'>Latest</button>
            <Marquee pauseOnHover={true}>
                {
                    news.map((n) => {
                        return <span key={n._id}>{n.title}</span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;