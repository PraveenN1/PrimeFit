import React from 'react';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div className="mt-5 lg:mt-52 p-5">
      <h2 className="text-2xl lg:text-4xl font-bold mb-8">
        Watch <span className="text-red-600 capitalize">{name}</span> exercise videos
      </h2>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-28 items-center flex-wrap">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="rounded-tl-lg"
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <div>
              <h3 className="text-lg lg:text-2xl font-semibold">{item.video.title}</h3>
              <p className="text-sm text-gray-700">{item.video.channelName}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
