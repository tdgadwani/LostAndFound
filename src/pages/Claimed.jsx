import { useState ,useEffect} from "react";
import Shimmer from "../components/Shimmer";
import ItemCard from "../components/ItemCard.jsx"
import HeaderL from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"


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
       
      }
      


    return (
        <>
           <HeaderL />
           allItem?.length === 0 ?<Shimmer/> :  
           (<div>
                  <div><h1>{typeItem} Items</h1></div>
                  <div className="flex flex-wrap bg-pink-200">
                        {
                        allItem.map((item) =>{
                            return (
                            <Link to = {"/ItemInfo/" + item._id} key = {item._id}><ItemCard{...item}  /></Link>);
                        }
                        ) }
                 </div>
           </div>)
           <Footer />
        </>
    )
};

export default ClaimItem;