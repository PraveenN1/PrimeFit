import React,{useState} from 'react'
import Hero from '../components/Hero'
import SearchExercises from '../components/SearchExercises'

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart,setBodyPart] = useState('all');
  return (
    <div>
      <Hero/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      {/* <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/> */}
    </div>
  )
}


export default Home