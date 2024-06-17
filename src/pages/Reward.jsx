import React from 'react'
import star from "../assets/VectorLogo.svg"
import diccount from "../assets/discount.png"
import HeaderL from '../components/Header';
import {Link} from "react-router-dom"
import Footer from '../components/Footer';



const Reward = () => {
     const points  = 50;
  return (
    <>
       <HeaderL/>

       <div className='m-16 mb-40 from-white to-red-300'>
        
        <div>
            <div className=" font-bold text-5xl text-center">Reawrds</div>
            <div className='m-2 flex place-content-center font-bold'>
                <img src={star} className='p-1'/>
                <p className='p-1'> Your Credit : {points}</p>              
            </div>
        </div>

        <div className="flex h-96 text-white m-2">

          <div className="w-1/3 bg-black m-2 p-2 rounded-xl">
                <div className='bg-white flex m-1 p-1 text-black rounded-md w-16 text-sm '>
                    <img src={star} className='size-5' />
                    <p className='px-1'>350</p>
                </div>
              <div className='  m-1 p-1 text-white'>flipcart coupan</div>
          </div> 

          <div className='w-1/3  m-2 p-2'>
              <div className='bg-black h-1/2 rounded-xl'>
                    <div className='bg-white flex m-1 p-1 text-black rounded-md w-16 text-sm '>
                        <img src={star} className='size-5' />
                        <p className='px-1'>350</p>
                    </div>
                  <div className='  m-1 p-1 text-white'>flipcart coupan</div>
              </div>
              <div className='flex h-48'>
                  <div className='m-2 p-2 bg-black w-1/2 rounded-xl'>
                    <div className='bg-white flex m-1 p-1 text-black rounded-md w-16 text-sm '>
                        <img src={star} className='size-5' />
                        <p className='px-1'>350</p>
                    </div>
                    <div className='  m-1 p-1 text-white'>flipcart coupan</div>
                  </div>
                  <div className='m-2 p-2 bg-black w-1/2 rounded-xl'>
                        <div className='bg-white flex m-1 p-1 text-black rounded-md w-16 text-sm '>
                            <img src={star} className='size-5' />
                            <p className='px-1'>350</p>
                        </div>
                      <div className='  m-1 p-1 text-white'>flipcart coupan</div>
                  </div>
              </div>
          </div>

          <div className="w-1/3 bg-black m-2 p-2 rounded-xl">
            <div className='bg-white flex m-1 p-1 text-black rounded-md w-16 text-sm '>
                        <img src={star} className='size-5' />
                        <p className='px-1'>350</p>
                    </div>
              <div className='  m-1 p-1 text-white'>flipcart coupan</div>
          </div>

        </div>



        <div>
               <div className='font-bold text-5xl text-center mt-14 '><h1>Reedemed</h1></div>
               
               <div className='flex place-content-center m-8'>
                    <div className=' m-2 p-2 bg-black text-white font-bold w-60 h-60 rounded-lg '>
                         <div className=' m-1 p-1 bg-slate-800 rounded-2xl'>
                            <img src={diccount} />
                         </div>
                         <div className='m-1 p-1'>
                            <div>item name</div>
                            <div className='bg-slate-800 rounded-lg pl-3'>150 left</div>
                         </div>
                    </div>
                    <div className=' m-2 p-2 bg-black text-white font-bold w-60 h-60 rounded-lg'>
                         <div className=' m-1 p-1 bg-slate-800 rounded-2xl'>
                            <img src={diccount} />
                         </div>
                         <div className='m-1 p-1'>
                            <div >item name</div>
                            <div className='bg-slate-800 rounded-lg px-0'>150 left</div>
                         </div>
                    </div>
                    <div className=' m-2 p-2 bg-black text-white font-bold w-60 h-60 rounded-lg'>
                         <div className=' m-1 p-1 bg-slate-800 rounded-2xl'>
                            <img src={diccount} />
                         </div>
                         <div className='m-1 p-1'>
                            <div>item name</div>
                            <div className='bg-slate-800 rounded-lg pl-3'>150 left</div>
                         </div>
                    </div>

               </div>
        </div>

       </div>
       
       <Footer/>
    </>
  )
}

export default Reward