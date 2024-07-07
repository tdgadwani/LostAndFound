
import { AVATAR_URLS } from "../utils/constants";
import outline from '../assets/pencil1.png';

const YourProfileComp = ()=>{
    const name = "Ravi";
    const credit = 100 ;
    const college_name = "Nit Patna";
    const position = "SAVIOR";

    const editHandler = async(e) => {
        e.preventDefault();
    };
    
   return(
    <>
        <div className="flex justify-center   min-h-screen bg-gradient-to-b from-white to-orange-300 p-8 mt-16 pb-44">
            <div className="flex justify-center">
                <div className=" text-center shadow-2xl  w-48 h-72 m-8 ">
                    <div className='bg-red-500 rounded-lg p-2 w-48 h-52'>
                        <img
                            src={AVATAR_URLS[0]}
                            className="w-40 h-40 mx-auto rounded-full my-2 "
                        />
                    </div>
                    <div className=' text-black'>
                    <div className="text-xl font-bold">{name}</div>
                    <div className="text-sm">{college_name}</div>
                    <div className="text-red-500 font-bold ">credits: {credit}</div>
                    </div>         
                </div>
                <div className=" text-center shadow-2xl  w-48 h-72 m-8 ">
                    <div className='bg-red-500 rounded-lg p-2 w-48 h-52'>
                        {/* <img
                            src={AVATAR_URLS[0]}
                            className="w-40 h-40 mx-auto rounded-full my-2 "
                        /> */}
                    </div>
                    <div className=' text-black '>
                        <div className="text-3xl font-bold flex justify-evenly items-center">{position}</div>
                    </div>         
                </div>
            </div>
            <div className="flex justify-end mb-10 mr-10 fixed bottom-16 right-4 " onClick={editHandler}>
                <img
                src={outline}
                alt="Edit"
                className="w-14 h-14 cursor-pointer"
                />
           </div>
        </div>
    </>
   );
};

export default YourProfileComp; 