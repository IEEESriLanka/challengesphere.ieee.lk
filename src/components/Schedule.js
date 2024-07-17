import React from 'react';

const timelineData = [
  {
    text: 'Started learning React',
    date: 'January 01 2020',
    category: {
      tag: 'education',
      color: 'bg-teal-500' // Tailwind teal
    },
    link: {
      url: 'https://reactjs.org/',
      text: 'Learn more'
    }
  },
  {
    text: 'Got my first job as a developer',
    date: 'June 15 2020',
    category: {
      tag: 'work',
      color: 'bg-blue-400' // Tailwind light blue
    },
    link: {
      url: 'https://www.example.com',
      text: 'Company website'
    }
  },
  {
    text: 'Completed a major project',
    date: 'December 20 2020',
    category: {
      tag: 'achievement',
      color: 'bg-cyan-500' // Tailwind cyan
    },
    link: {
      url: 'https://www.example.com/project',
      text: 'View project'
    }
  }
];

const TimelineItem = ({ data }) => (
  <div className="flex justify-end odd:self-end odd:justify-start relative w-1/2 pr-8 odd:pl-8 odd:pr-0 my-4">
    <div className="relative bg-blue-100 rounded-lg shadow-lg p-4 w-96 max-w-full text-right odd:text-left flex flex-col items-end odd:items-start">
      <span className={`absolute top-1 left-1 odd:left-auto odd:right-1 px-2 py-1 text-white text-xs font-bold uppercase rounded ${data.category.color}`}>
        {data.category.tag}
      </span>
      <time className="text-gray-600 text-xs font-bold">{data.date}</time>
      <p className="text-gray-800 text-sm my-4">{data.text}</p>
      {data.link && (
        <a
          href={data.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm font-bold"
        >
          {data.link.text} <span className="text-xs">►</span>
        </a>
      )}
      <span className="absolute bg-white border-4 border-teal-500 rounded-full w-5 h-5 top-1/2 right-0 transform -translate-y-1/2 translate-x-2.5 odd:right-auto odd:left-0 odd:-translate-x-2.5"></span>
    </div>
  </div>
);

const Schedule = () => (
  <div className="relative my-16 bg-gradient-to-r from-light-blue-50 via-white to-white">
    <div className="absolute left-1/2 w-1 h-full bg-teal-300 transform -translate-x-1/2"></div>
    {timelineData.length > 0 && (
      <div className="flex flex-col">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    )}
  </div>
);

export default Schedule;
