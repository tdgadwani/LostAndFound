import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Work = () => {
  return (
    <div>
        <Header/>
        <div className='bg-foundify-gradient h-screen pt-24'>
             <div className='flex justify-center'>
                <img src={"https://res.cloudinary.com/dlgrwtkck/image/upload/v1725486304/fugga62hlaestbsxkt8k.png"} />
             </div>
             <div className='text-2xl font-bold text-white flex justify-center pt-10 text-center'>
                Nothing is ever lost that cannot be found 
            </div>
        </div>
        <Footer className=""/>
    </div>
  )
}

export default Work;