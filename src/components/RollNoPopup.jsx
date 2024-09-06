import React, { useState } from 'react';
import cross from '../assets/cross.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateFoundItem } from '../services/operations/foundItemsAPI';

const RollNoPopup = ({ id, onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [rollNo, setRollNo] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
          isRetrieved: true ,
          retrievedByUser: rollNo,
        };
        dispatch(updateFoundItem(formData,id, navigate));
        
    };

    return (
        <div className='fixed inset-0 flex z-50 items-center justify-center bg-black bg-opacity-50'>
            <div className='relative bg-white p-8 rounded-lg shadow-lg w-96'>
                <button onClick={onClose} className='absolute top-2 right-2'>
                    <img src={cross} alt="Close" className='w-6 h-6' />
                </button>
                <div className='text-center mb-6'>
                    <h2 className='text-2xl font-bold'>Enter Roll Number</h2>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                    <input
                        type="text"
                        value={rollNo}
                        onChange={(e) => setRollNo(e.target.value)}
                        placeholder='Roll Number'
                        className='text-center border border-gray-300 rounded py-2 px-4 w-full text-xl focus:outline-none focus:border-blue-500 mb-6'
                    />
                    <button
                        type="submit"
                        className='bg-blue-500 text-white py-2 px-6 rounded font-semibold'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RollNoPopup;
