
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
        <div className="flex justify-center  pb-10  bg-foundify-gradient pt-16 ">
            <div>
                <div className="text-white text-6xl flex justify-center mt-10 mb-10" >
                     Your Profile
                </div>
                <div className="flex justify-center">
                    <div className=" text-center shadow-2xl  w-48 h-72 m-8 ">
                        <div className='bg-red-500 rounded-t-lg rounded- p-2 w-48 h-52'>
                            <img
                                src={AVATAR_URLS[0]}
                                className="w-40 h-40 mx-auto rounded-full my-2 "
                            />
                        </div >
                        <div className=' text-black bg-white h-20'>
                            <div className="text-xl font-bold">{name}</div>
                            <div className="text-sm">{college_name}</div>
                            <div className="text-red-500 font-bold ">credits: {credit}</div>
                        </div>         
                    </div>

                    <div className=" text-center shadow-2xl  w-48 h-72 m-8 ">
                        <div className='bg-red-500 rounded-t-lg p-2 w-48 h-52'>
                            {/* <img
                                src={AVATAR_URLS[0]}
                                className="w-40 h-40 mx-auto rounded-full my-2 "
                            /> */}
                        </div>
                        <div className=' text-black bg-white h-20 flex justify-center'>
                            <div className="text-3xl font-bold flex justify-evenly items-center">{position}</div>
                        </div>         
                    </div>
                </div>
            </div>
    
        </div>
    </>
   );
};

export default YourProfileComp; 