import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="text-center max-w-md">
                <h1 className="text-7xl font-bold text-gray-800">404</h1>
                <h2 className="mt-4 text-2xl font-semibold text-gray-700">
                    Page Not Found
                </h2>

                <p className="mt-3 text-gray-500">
                    The page you are looking for doesn’t exist or has been moved.
                </p>
                <div className="mt-6">
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                    >
                        Go Back Home
                    </Link>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                    If you think this is a mistake, check the URL and try again.
                </p>
            </div>
        </div>
    );
};

export default NotFound;