import React from 'react';

function EarthIndex() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>
        Earth Index
      </h1>
      <p className='text-base md:text-xl mb-3 font-medium px-5 md:px-40'>
        <a
          href='https://www.earthgenome.org/earth-index'
          className='text-blue-600'
        >
          Earth Index
        </a>{' '}
        is a tool built by{' '}
        <a
          href='https://www.earthgenome.org/'
          className='text-blue-600'
        >
          Earth Genome
        </a>{' '}
        that allows anyone to harness the power of AI to analyze
        satellite imagery and quickly find examples of environmental
        explotation.
      </p>
      <div className='w-full max-w-6xl mx-auto'>
        <div className='md:flex md:items-start md:gap-5 w-full mt-10'>
          <div className='md:w-1/2 px-20'>
            {' '}
            <p className='text-base md:text-lg mb-3 font-light'>
              Since October 2023, I have been helping to develop Earth
              Index to support its application by indigenous groups
              seeking to protect their land. Earth Index has already
              proven effective at enabling users to find examples of
              illegal land use, as in its application as part of{' '}
              <a
                href='https://amazonminingwatch.org/en'
                className='text-blue-600'
              >
                Amazon Mining Watch
              </a>
              .
            </p>
            <p className='text-base md:text-lg mb-3 font-light'>
              As part of this work, I have built a proof of concept
              frontend for Earth Index that connects to an existing API
              backend. I used Mapbox GL JS, react-map-gl, Mantine UI,
              Typescript, React, and Next.js to create the site. I have
              also been developing wireframes for a future iteration of
              the tool. These have been grounded in insights from user
              interviews with potential users at indigenous advocacy
              organizations.
            </p>
            <p className='text-base md:text-lg mb-3 font-light'>
              Since Earth Index is in active development, I am unable to
              share access to the tool itself, but I've provided some
              images that showcase the wireframes and frontend demo. You
              can read more about the work that I've done on Earth Index
              in this{' '}
              <a
                href='https://medium.com/earthrisemedia/midstream-research-note-rebuilding-the-earth-index-user-interface-81e8c3d4084c'
                className='text-blue-600'
              >
                midstream research note
              </a>
              . And you can read about Earth Genome's partnership with
              the Rockefeller Foundation to develop Earth Index for
              indigenous groups in{' '}
              <a
                href='https://medium.com/earthrisemedia/empowering-indigenous-communities-with-environmental-ai-5ab7b1ceb447'
                className='text-blue-600'
              >
                this blog post
              </a>
              .
            </p>
          </div>
          <div className='md:w-1/2'>
            <p className='md:text-3xl text-xl font-semibold'>
              Wireframes
            </p>
            <img
              src='/assets/earth-index-wireframes.png'
              alt='wireframe image'
            />
            <p className='md:text-3xl text-xl font-semibold'>
              Frontend Demo
            </p>
            <img
              src='/assets/earth-index-frontend.png'
              alt='frontend image'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarthIndex;
