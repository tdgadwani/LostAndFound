import { AVATAR_URLS } from "../utils/constants";
import outline from '../assets/pencil1.png';

const YourProfileComp = () => {
    const name = "Ravi";
    const credit = 100;
    const college_name = "Nit Patna";
    const position = "SAVIOR";

    const editHandler = async(e) => {
        e.preventDefault();
    };
    
    return (
        <>
            <div className="flex flex-col items-center pb-10 bg-foundify-gradient pt-16">
                <div className="text-white text-6xl flex justify-center mt-10 mb-10">
                    Your Profile
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center">
                    <div className="text-center shadow-2xl w-full sm:w-48 h-auto sm:h-72 m-4">
                        <div className='bg-red-500 rounded-t-lg p-2 w-full sm:w-48 h-44 sm:h-52'>
                            <img
                                src={AVATAR_URLS[0]}
                                className="w-32 sm:w-40 h-auto mx-auto rounded-full my-1"
                                alt="Profile"
                            />
                        </div>
                        <div className='text-black bg-white h-24 p-3'>
                            <div className="text-lg sm:text-xl font-bold">{name}</div>
                            <div className="text-xs sm:text-sm">{college_name}</div>
                            <div className="text-red-500 font-bold text-sm sm:text-base">credits: {credit}</div>
                        </div>
                    </div>

                    <div className="text-center shadow-2xl w-full sm:w-48 h-auto sm:h-72 m-4">
                        <div className='bg-red-500 rounded-t-lg p-2 w-full sm:w-48 h-48 sm:h-52'>
                            {/* Placeholder for potential image */}
                        </div>
                        <div className='text-black bg-white h-24 p-4 flex justify-center'>
                            <div className="text-xl sm:text-3xl font-bold">{position}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default YourProfileComp;
