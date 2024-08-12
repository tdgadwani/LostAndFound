import HeaderShimmer from "./HeaderShimmer";
import FooterShimmer from "./FooterShimmer";


const LostItemShimmer = () => {
    return (
       <>
           <HeaderShimmer/>

           <div className="grid grid-cols-5">
               { Array(15).fill("").map((e,i ) => 
                <div className="m-5">
                    <div className='bg-kaddu-123 h-60 w-60 rounded-xl'></div>
                    <div className='bg-kaddu-123 h-4 w-44 mt-4 rounded-xl'></div>
                    <div className='bg-kaddu-123 h-4 w-48 mt-4 rounded-xl'></div>
                    </div>
              )}  
            </div>

            <FooterShimmer />
        </>
    );
};

export default LostItemShimmer;

