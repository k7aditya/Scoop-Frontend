
import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import Carousell from '../components/Carousell'
import PopularPost from '../components/PopularPost'
import { Box } from '@mui/material'


const Home = () => {
   

  return (<Box sx={{ bgcolor: 'black', width: '100vw' }}>
 
 
  <Carousell />
  <PopularPost></PopularPost>
 </Box>
    
  )
}

export default Home