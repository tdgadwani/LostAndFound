
const Shimmer = () =>{
    return (
        <div className="">
               { Array(10).fill("").map((e,i ) => <div className="shimmer_card" key={i}></div>)}  
        </div>
    );
};

export default Shimmer;