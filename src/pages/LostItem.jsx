import { useState ,useEffect} from "react";
import Shimmer from "../components/Shimmer";

const LostItem = () => {
    const typeItem = "Lost";
    const [allItem,setAllItemt] = useState([]);
    
    
    useEffect(()=>{
        getItem();
       },[]);

    async function getItem(){
       
        const data = await fetch("https://food-api-sable.vercel.app/swiggy");
  
        const json = await data.json() ;
    
        setAllItemt(json)
       
  
        // console.log(allItem)
      }
      

      if(!allItem)
        return null;


    return allItem?.length === 0 ?<Shimmer/> :  (
        <>
           <div>
                  <div><h1>{typeItem} Items</h1></div>
                  <div className="flex flex-wrap bg-pink-200">
                        {
                        setAllItemt.map((item) =>{
                            return (
                            <Link to = {"/ItemInfo/" + item.id} key = {item.id}><ReastuarantCard {...item}  /></Link>);
                        }
                        ) }
                 </div>
           </div>
        </>
    )
};

export default LostItem;