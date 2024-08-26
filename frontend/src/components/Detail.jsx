import React from 'react';
import BodyPartImage from '../../assets/icons/body-part.png';
import TargetImage from '../../assets/icons/target.png';
import EquipmentImage from '../../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-16 p-5 items-center">
      <img src={gifUrl} alt={name} loading="lazy" className="w-full lg:w-1/2 rounded-lg shadow-lg" />
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl lg:text-6xl font-bold capitalize">{name}</h2>
        <p className="text-base lg:text-xl text-gray-700">
          Exercises keep you strong.{' '}
          <span className="capitalize">{name}</span> is one of the best <br /> exercises to target your {target}. It will help you improve your <br /> mood and gain energy.
        </p>
        {extraDetail?.map((item) => (
          <div key={item.name} className="flex items-center gap-6">
            <button className="bg-yellow-100 rounded-full w-24 h-24 flex items-center justify-center">
              <img src={item.icon} alt={item.name} className="w-12 h-12" />
            </button>
            <p className="text-xl lg:text-2xl capitalize">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
