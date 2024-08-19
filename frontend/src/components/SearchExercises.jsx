import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ bodyPart , setExercises,setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData(); 
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );

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
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={bod}/>
        </div>
      </div>
    </div>
  );
};

export default SearchExercises;
