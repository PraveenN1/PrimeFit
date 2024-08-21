import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div
      onClick={() => scrollPrev()}
      className="flex items-center justify-center w-12 h-12 cursor-pointer bg-gray-200 rounded-full shadow-lg"
    >
      <HiOutlineArrowLeft />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div
      onClick={() => scrollNext()}
      className="flex items-center justify-center w-12 h-12 cursor-pointer bg-gray-200 rounded-full shadow-lg"
    >
      <HiOutlineArrowRight />
    </div>
  );
};

const HorizontalScrollbar = ({data}) => {
  return (
    <ScrollMenu LeftArrow={<LeftArrow />} RightArrow={<RightArrow />}>
      {data.map((item) => (
        <div
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          className=""
        >
          {console.log(item)}       
            <ExerciseCard exercise={item} />
        </div>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
