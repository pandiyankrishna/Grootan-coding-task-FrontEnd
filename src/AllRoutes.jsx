import React from 'react'
import {Routes, Route} from 'react-router-dom'
import QRPage from './screens/QRPage'
import Questions from './screens/Questions'


const AllRoutes = () => {
    return ( 
      <Routes>
          <Route path='/' element={<QRPage/>}/>
          <Route path='/questions' element={<Questions/>}/>
      </Routes>
    )
  }
  
  export default AllRoutes