import { useState ,useEffect} from "react";
import Shimmer from "../components/Shimmer";
import ItemCard from "../components/Item.jsx"

const LostItem = () => {
    const typeItem = "Lost";
    const [allItem,setAllItem] = useState([]);
    
    
    useEffect(()=>{
        getItem();
       },[]);

    async function getItem(){
       
        const data = await fetch("https://food-api-sable.vercel.app/swiggy");
  
        const json = await data.json() ;
    
        setAllItem(json)
       
  
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
                        allItem.map((item) =>{
                            return (
                            <Link to = {"/ItemInfo/" + item._id} key = {item._id}><ItemCard{...item}  /></Link>);
                        }
                        ) }
                 </div>
           </div>
        </>
    )
};

export default LostItem;