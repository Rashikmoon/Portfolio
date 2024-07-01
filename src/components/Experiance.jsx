import React from 'react';

const Experience = () => {
  const EXPiTEM = [
    {
      id: 1,
      img: "./7.svg",
      alt: "Technology 1"
    },
    {
      id: 2,
      img: "./8.svg",
      alt: "Technology 2"
    },
    {
      id: 3,
      img: "./9.svg",
      alt: "Technology 3"
    },
    {
      id: 4,
      img: "./10.svg",
      alt: "Technology 4"
    },
    {
      id: 5,
      img: "./11.svg",
      alt: "Technology 5"
    },
  ];

  return (
    <div
    name='Experience' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-28'>
      <h1 className='font-bold text-3xl mb-8 text-center'>
        I've experience in the following technologies
      </h1>
      <div className='flex justify-center space-x-14 p-5 '>
        {EXPiTEM.map(({ id, img, alt }) => (
          <div key={id} className='w-[200px] hover:scale-110 transition-all'>
            <img src={img} alt={alt} className='w-full h-auto object-contain' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
