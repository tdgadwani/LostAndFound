
const Shimmer = () =>{
    return (
        <div className="">
               { Array(10).fill("").map(e  => <div className="shimmer_card"></div>)}  
        </div>
    );
};

export default Shimmer;