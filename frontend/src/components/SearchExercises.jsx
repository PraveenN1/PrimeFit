import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ bodyPart , setExercises,setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [exercisesData,setExercisesData] = useState([]); 
  // const [exercises,setExercises]=useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
      setExercisesData(exercisesData);
      console.log(exercisesData);
    };
  
    fetchExercisesData(); 
  }, []);

  const handleSearch = async () => {
    if (search) {
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search)
      );
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-10 justify-center p-5">
        <h2 className="font-bold text-center text-4xl md:text-5xl mb-12">
          Awesome Exercises You <br /> Should Know
        </h2>
        <div className="mb-18 flex flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            className="w-full p-5 rounded-full text-lg font-semibold bg-white shadow-lg focus:outline-none border-2"
          />
          <button
            onClick={handleSearch}
            className="text-white text-lg md:text-xl font-bold py-5 px-10 rounded-full transition duration-300"
          >
            Search
          </button>
        </div>
        <div className="w-full p-5">
          <HorizontalScrollbar data={exercisesData} bodyParts={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        </div>
      </div>
    </div>
  );
};

export default SearchExercises;
