import React, { Fragment } from 'react';

const timelineData = [
  {
    title: 'Elevate Session',
    description: 'Challenge sphere Elevate',
    date: '27th June',
    category: {
      tag: 'event',
      color: 'shadow-red-700',
      icon: 'fas fa-star' // Example icon class for workshop using Font Awesome
    },
    direction: 'left'
  },
  {
    title: 'Workshop Seminar',
    description: 'Chips Challenge',
    date: '21st July',
    category: {
      tag: 'workshop',
      color: 'shadow-blue-700',
      icon: 'fas fa-tools' // Example icon class for workshop using Font Awesome
    },
    direction: 'right'
  },
  {
    title: 'Final Competition',
    description: 'Arduino Challenge',
    date: '22nd July',
    category: {
      tag: 'competition',
      color: 'shadow-green-800',
      icon: 'fas fa-trophy' // Example icon class for competition using Font Awesome
    },
    direction: 'left'
  },
  {
    title: 'Workshop 01',
    description: 'Circuits Challenge',
    date: '23rd July',
    category: {
      tag: 'workshop',
      color: 'shadow-blue-700',
      icon: 'fas fa-tools' // Example icon class for workshop using Font Awesome
    },
    direction: 'right'
  },
  {
    title: 'Final Competition',
    description: 'Chips Challenge',
    date: '27th July',
    category: {
      tag: 'competition',
      color: 'shadow-green-800',
      icon: 'fas fa-trophy' // Example icon class for competition using Font Awesome
    },
    direction: 'left'
  },
  {
    title: 'Workshop 02',
    description: 'Circuits Challenge',
    date: '3rd August',
    category: {
      tag: 'workshop',
      color: 'shadow-blue-700',
      icon: 'fas fa-tools' // Example icon class for workshop using Font Awesome
    },
    direction: 'right'
  },
  {
    title: 'Challenge Sphere Spotlight',
    description: 'Semi Finals',
    date: 'September',
    category: {
      tag: 'event',
      color: 'shadow-red-700',
      icon: 'fas fa-star' // Example icon class for event using Font Awesome
    },
    direction: 'left'
  },
  {
    title: 'Challenge Sphere Triumph',
    description: ' Final Competition/ Awarding Ceremony ',
    date: 'September',
    category: {
      tag: 'event',
      color: 'shadow-red-700',
      icon: 'fas fa-star' // Example icon class for event using Font Awesome
    },
    direction: 'right'
  }
];

const Circle = () => (
  <div className='bg-gradient-to-b from-blue-300 to-blue-800 rounded-full w-5 h-5 bg-blue-500 mx-auto' />
);

const Pillar = () => (
  <div className='bg-gradient-to-b from-blue-300 to-blue-800 rounded-t-full rounded-b-full w-2 h-40 bg-blue-500 mx-auto hidden md:block' />
);

const EventCard = ({ icon, heading, title, description, color }) => (
  <div className={`transition duration-300 ease-in-out transform hover:-translate-y-1 ${color} flex flex-row gap-x-2 border shadow-lg rounded-xl hover:shadow-2xl py-3 px-16 mx-4`}>
    <div className={`text-4xl -mt-1 -ml-4 mr-4 ${icon}`} style={{ minWidth: '1rem', color: 'blue' }}></div>
    <div className='flex flex-col gap-y-1'>
      <div className='text-gray-700 font-bold text-start text-2xl '>{heading}</div>
      <div className='pt-4 text-xl text-start font-bold text-black'>{title}</div>
      <div className=' -pt-1 text-2xl text-start font-semibold text-green-700'>{description}</div>
    </div>
  </div>
);

const Schedule = () => (
  <div className='flex flex-col gap-y-3 w-full py-10 bg-blue-100 p-8'>
    <h1 className='text-center text-5xl font-bold text-blue-900 mb-16'>Schedule</h1>
    <Circle />
    {timelineData.map((event, key) => (
      <Fragment key={key}>
        <div className='grid md:grid-cols-[1fr_auto_1fr] grid-cols-1 gap-x-2 items-center mx-auto'>
          {event.direction === 'left' ? (
            <EventCard icon={event.category.icon} heading={event.date} title={event.title} description={event.description} color={event.category.color} />
          ) : (
            <div></div>
          )}

          <Pillar />

          {event.direction === 'right' ? (
            <EventCard icon={event.category.icon} heading={event.date} title={event.title} description={event.description} color={event.category.color} />
          ) : (
            <div></div>
          )}
        </div>
        {key < timelineData.length - 1 && <Circle />}
      </Fragment>
    ))}
    <Circle />
  </div>
);

export default Schedule;
