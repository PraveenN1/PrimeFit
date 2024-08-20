import React from 'react'
import { Link } from 'react-router-dom';

const Exercises = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
    <div className='flex flex-row'>
      <button>
        {exercise.bodyPart}
      </button>
      <button>
        {exercise.target}
      </button>
      <p>{exercise.name}</p>
    </div>
    </Link>
  )
}

export default Exercises