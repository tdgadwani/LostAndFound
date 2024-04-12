import React from 'react'
import ItemList from '../components/ItemList'
import ItemDetail from '../components/ItemDetail'

const LostPage = () => {
  return (
    <div className='flex '>

      <div className='basis-1/3'>
        <ItemList/>

      </div>
    
      <div className='basis-2/3 border-l-4'>

        <ItemDetail/>
      </div>
    </div>
  )
}

export default LostPage