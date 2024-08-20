import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {
  console.log(exercise.bodyPart);
  return(
    <div className='h-20'>
      ExerciseCard
    </div>
  )
};

export default ExerciseCard;
