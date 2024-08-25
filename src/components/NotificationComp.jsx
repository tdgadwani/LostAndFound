import React, { useEffect } from 'react'
import { getNotifications } from '../services/operations/notificationAPI'
import { useDispatch, useSelector } from 'react-redux'

export default function NotificationComp() {
    const notiloading =useSelector((store)=>store?.notification?.notiloading)
    const notificationData =useSelector((store)=>store?.notification?.notificationData)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getNotifications());
    },[])

    
    if(notiloading){
        // You can show hare a Loader Component
        return <div>Loading...</div>
    }
  return (
    <div className='w-full h-full p-4 overflow-y-auto '>
        {notificationData?.length>0 ?
        notificationData?.map((notification)=>
        (
        <div className='border-black border-b-2 p-2 ' key={notification?._id}>
            <div>
                {notification?.message}
            </div>
        </div>
        )
        ):
        (<div>No Notification </div>)}
    </div>
  )
}