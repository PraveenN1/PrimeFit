import React from 'react';
import Icon from '../../assets/icons/gym.png';

const BodyPart = ({item,setBodyPart,bodyPart }) => (
  <button
    type="button"
    className={`flex flex-col items-center justify-center bg-white rounded-bl-lg w-[270px] h-[282px] cursor-pointer gap-12 ${
      bodyPart === item ? 'border-t-4 border-red-600' : ''
    }`}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    {console.log(bodyPart)}
    <img src={Icon} alt="dumbbell" className="w-10 h-10" />
    <p className="text-2xl font-bold text-[#3A1212] capitalize"> {bodyParts} </p>
  </button>
);

export default BodyPart;
