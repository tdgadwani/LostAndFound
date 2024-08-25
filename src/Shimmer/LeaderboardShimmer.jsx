import React from 'react'
import HeaderShimmer from './HeaderShimmer'
import FooterShimmer from './FooterShimmer'

const LeaderboardShimmer=()=> {
  return (
    <>
      <HeaderShimmer/>
      <div className='p-6 bg-gradient-to-b from-white to-orange-200 '>
        
        <div className='w-48 h-9 bg-gray-400 mx-auto mb-8'></div>
        {/* card */}
        <div className='mx-auto flex justify-center space-x-4 mb-8'>
            <div className='w-40 h-56 bg-gray-400'></div>
            <div className='w-48 h-64 bg-gray-400'></div>
            <div className='w-40 h-56 bg-gray-400'></div>
        </div>

        {/* table */}
        <div className='w-[90%] md:w-3/5 mx-auto rounded-lg shadow-md'>
            <table className='min-w-full divide-y divide-gray-900 rounded-lg'>
              <thead className="bg-gray-400">
                <tr>
                  <th className="h-10"></th>
                  <th className="h-10"></th>
                  <th className="h-10"></th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y border-collapse rounded-lg divide-gray-600">
                {Array(10).fill("").map((user, index) => (
                  <tr key={index}>
                    <td className="h-8 bg-gray-400">

                    </td>
                    <td className="h-8 bg-gray-400"></td>
                    <td className="h-8 bg-gray-400">
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
      {/* <FooterShimmer/> */}
    </>
  )
}

export default LeaderboardShimmer