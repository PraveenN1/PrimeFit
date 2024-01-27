import React,{useState} from 'react'
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  return (
    <div>
      <Box>
        <HeroBanner/>
        <SearchExercises/>
        <Exercises/>
      </Box>
    </div>
  )
}

export default Home;