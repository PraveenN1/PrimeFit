import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card " to={`/exercise/${exercise.id}`}>
    <div className="border-2 h-full p-2">
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        className="w-full h-auto"
      />
      <div className="flex flex-row mt-2 gap-2 mx-5">
        <button className=" text-white bg-red-300 text-sm rounded-full px-4 py-1 capitalize">
          {exercise.bodyPart}
        </button>
        <button className=" text-white bg-yellow-400 text-sm rounded-full px-4 py-1 capitalize">
          {exercise.target}
        </button>
      </div>
      <p className=" mt-3 text-black font-bold capitalize text-lg lg:text-2xl pb-2">
        {exercise.name}
      </p>
    </div>
  </Link>
);

export default ExerciseCard;
