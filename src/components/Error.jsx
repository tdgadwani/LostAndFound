import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import errorImage from '../assets/errorImage.svg'; 
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-20"> 
                <img src={errorImage} alt="Error" className="mb-8 w-1/2 h-auto" />
                <h1 className="text-4xl font-bold text-black mb-4">Oops! Page not found</h1>
                <p className="text-lg text-gray-600 mb-8">We're sorry, but the page you are looking for does not exist.</p>
                <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-kaddu transition duration-300">
                    Go back
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default Error;
