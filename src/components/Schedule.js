import React from 'react';

const timelineData = [
  {
    text: 'Workshop Seminar - Chips Challenge',
    date: '21st July',
    category: {
      tag: 'workshop',
      color: 'bg-light-blue-400' // Tailwind light blue for workshops
    }
  },
  {
    text: 'Final Competition of Arduino Challenge',
    date: '22nd July',
    category: {
      tag: 'competition',
      color: 'bg-blue-700' // Tailwind dark blue for competitions
    }
  },
  {
    text: 'Workshop 01 - Circuits Challenge',
    date: '23rd July',
    category: {
      tag: 'workshop',
      color: 'bg-light-blue-600' // Tailwind light blue for workshops
    }
  },
  {
    text: 'Final Competition - Chips Challenge',
    date: '27th July',
    category: {
      tag: 'competition',
      color: 'bg-blue-700' // Tailwind dark blue for competitions
    }
  },
  {
    text: 'Workshop 02 - Circuits Challenge',
    date: '3rd August',
    category: {
      tag: 'workshop',
      color: 'bg-light-blue-600' // Tailwind light blue for workshops
    }
  },
  {
    text: 'Spotlight (Semi Finals)',
    date: '7th or 8th September',
    category: {
      tag: 'event',
      color: 'bg-orange-500' // Tailwind dark orange and blue mix for semi-finals and finals
    }
  },
  {
    text: 'Triumph (Finals)',
    date: '21st or 22nd September',
    category: {
      tag: 'event',
      color: 'bg-orange-500' // Tailwind dark orange and blue mix for semi-finals and finals
    }
  }
];

const TimelineItem = ({ data }) => (
  <div className="flex  justify-end odd:self-end odd:justify-start relative w-1/2 pr-8 odd:pl-8 odd:pr-0 my-4">
    <div className="relative bg-blue-300 rounded-lg shadow-lg p-4 w-96 max-w-full text-right odd:text-left flex flex-col items-end odd:items-start">
      <span className={`absolute top-1 left-1 odd:left-auto odd:right-1 px-2 py-1 text-white text-xs font-bold uppercase rounded ${data.category.color}`}>
        {data.category.tag}
      </span>
      <time className="text-gray-600 text-xs font-bold">{data.date}</time>
      <p className="text-gray-800 text-sm my-4">{data.text}</p>
      <span className="absolute bg-white border-4 border-teal-500 rounded-full w-5 h-5 top-1/2 right-0 transform -translate-y-1/2 translate-x-2.5 odd:right-auto odd:left-0 odd:-translate-x-2.5"></span>
    </div>
  </div>
);

const Schedule = () => (
  <div className="relative my-16">
    <div className="absolute top-16 left-1/2 w-1 h-full bg-teal-300 transform -translate-x-1/2"></div>
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-blue-800">Schedule</h2>
    </div>
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
