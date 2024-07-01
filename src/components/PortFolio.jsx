import React from 'react';

const Portfolio = () => {
  const github = (url) => {
    window.open(url, "_blank");
  };

  const portItem = [
    {
      id: 1,
      img: "./22.png",
      heading: "Job Portal",
      text: "A comprehensive platform that connects job seekers with employers. Features include resume building, job search filters, and employer reviews. Built with a focus on user experience and accessibility.",
      githubLink: "https://github.com/Rashikmoon/Rashikmoon"
    },
    {
      id: 2,
      img: "./33.png",
      heading: "Dice Game",
      text: "A fun and interactive dice game developed to showcase basic JavaScript functionalities. Players can roll the dice, keep track of their scores, and compete for the highest score. Perfect for learning the basics of game development.",
      githubLink: "https://github.com/Rashikmoon/Rashikmoon"
    },
    {
      id: 3,
      img: "./44.png",
      heading: "Food App",
      text: "A user-friendly food ordering app that allows users to browse menus, place orders, and track delivery status in real-time. Integrates with various payment gateways and offers personalized meal recommendations.",
      githubLink: "https://github.com/Rashikmoon/Rashikmoon"
    },
    {
      id: 4,
      img: "./55.png",
      heading: "Shopping Cart App",
      text: "An e-commerce application that provides a seamless shopping experience. Features include product listings, detailed descriptions, user reviews, and a secure checkout process. Optimized for performance and scalability.",
      githubLink: "https://github.com/Rashikmoon/Rashikmoon"
    },
    {
      id: 5,
      img: "./66.png",
      heading: "Contact App",
      text: "A simple and efficient contact management app that allows users to store and organize contact information. Features include search functionality, group categorization, and easy data import/export options.",
      githubLink: "https://github.com/Rashikmoon/Rashikmoon"
    },
  ];

  return (
    <div name='Portfolio' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-28'>
      <h1 className='font-bold text-3xl mb-8'>Portfolio</h1>
      <span className='font-semibold underline text-2xl mb-8 block'>Featured Projects</span>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {portItem.map(({ id, img, heading, text, githubLink }) => (
          <div key={id} className='w-[400px] border rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
            <img src={img} alt={heading} className='w-full h-85 p-6 object-cover' />
            <div className='p-6'>
              <h1 className='font-bold text-xl mb-2'>{heading}</h1>
              <p className='text-base mb-4'>{text}</p>
              <div>
                <button
                  className='bg-blue-500 text-white px-4 py-2 rounded'
                  onClick={() => github(githubLink)}
                >
                  Source Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
