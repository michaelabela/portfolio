import React from 'react';

function USFood() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>
        US Food
      </h1>
      <p className='text-base md:text-xl mb-3 font-medium px-5 md:px-40'>
        An exploration of U.S. county-level food consumption and
        production data alongside demographic data that espouses the
        inequities within our food system. This project was completed as
        part of the New School's Infographics and Visual Storytelling
        course. Data was provided by the Plotline's{' '}
        <a
          href='https://food.theplotline.org/'
          className='text-blue-600'
        >
          Food Twin
        </a>{' '}
        project.
      </p>
      <a
        href={'https://michaelabela.github.io/US-Food/'}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block px-4 py-2 border border-black bg-white text-black rounded hover:bg-black hover:text-white hover:border-transparent transition duration-300'
      >
        Visit Website
      </a>
      <div className='w-full max-w-6xl mx-auto md:flex md:items-start mt-10 md:mt-20'>
        <div className='md:w-2/5 m-5'>
          <h2 className='md:text-3xl text-xl font-semibold mb-2'>
            Design System
          </h2>
          <p className='text-base mb-2 text-left'>
            I began by creating a design system that would provide me
            guidelines for all subsequent data exploration and
            visualization. I wanted the design choices to reflect the
            organic nature of food / agriculture as well as the
            objective nature of the statistics and demographic data that
            I was working with.
          </p>
          <p className='text-base mb-2 text-left'>
            I chose fonts that were clean and statistical but I worked
            with colors that evoked land, dirt, and produce. These
            colors were complemented with a dark blue that is used to
            indicate objectivity without the starkness of a pure black.
          </p>
        </div>
        <div className='md:w-3/5 md:mr-5 mb-5'>
          <object
            data='/assets/us-food-design-system.pdf'
            type='application/pdf'
            width='100%'
            height='500px'
          >
            <p>
              <a href='/assets/us-food-design-system.pdf'>
                Download Design System PDF
              </a>
            </p>
          </object>
        </div>
      </div>
      <div className='w-full max-w-6xl mx-auto md:flex md:items-start mt-10 md:mt-20'>
        <div className='md:w-3/5 md:mr-5 mb-5 shadow-lg'>
          <img
            src='/assets/us-food-tableau.png'
            alt='dashboard image'
          />
        </div>
        <div className='md:w-2/5 m-5'>
          <h2 className='md:text-3xl text-xl font-semibold mb-2'>
            Tableau Data Dashboard
          </h2>
          <a
            href={
              'https://public.tableau.com/app/profile/mikey.abela/viz/AmericanFoodProductionConsumption/Dashboard4'
            }
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block px-4 py-2 border border-black bg-white text-black rounded hover:bg-black hover:text-white hover:border-transparent transition duration-300'
          >
            Visit Dashboard
          </a>
          <p className='text-base mb-2 text-left mt-5'>
            With my design system in hand, I started exploring the data
            in Tableau. These data included county-level total and per
            capita consumption and production data in kg and kcal. In
            this way, I could derive insights regarding where in the
            country most of our food is produced, and which counties
            consume more calories per person than others. By coupling
            this information with demographic data on these counties,
            insights regarding the correlation between high calorie
            diets and income level or race could be discovered. This
            dashboard enables the user to discover these insights
            themselves.
          </p>
        </div>
      </div>
      <div className='w-full max-w-6xl mx-auto md:flex md:items-start mt-10 md:mt-20'>
        <div className='md:w-2/5 m-5'>
          <h2 className='md:text-3xl text-xl font-semibold mb-2'>
            Custom Data Graphic
          </h2>
          <p className='text-base mb-2 text-left'>
            Now that I had an idea of the kinds of insights that could
            be derived from my data set, I focused on how to tell a
            story with it. In this custom data graphic, created in Adobe
            Illustrator, I tell the story of how food consumption is
            unequal across different demographics in the United States.
            I determined the proportion of each US county that was
            low-income, high-income, black, latino, and white. Then, I
            plotted these statistics against the average per capita
            calorie consumption / day (in kilo-calories).
          </p>
          <p className='text-base mb-2 text-left'>
            I then made an interactive version of this graphic using
            Observable and D3. You can view it{' '}
            <a
              href='https://observablehq.com/d/153c29528a172199'
              className='text-blue-600'
            >
              here
            </a>
            .
          </p>
        </div>
        <div className='md:w-3/5 md:mr-5 mb-5 shadow-lg'>
          <img
            src='/assets/us-food-custom-graphic.png'
            alt='custom graphic image'
          />
        </div>
      </div>
      <div className='w-full max-w-6xl mx-auto mt-10 md:mt-20 m-5'>
        {' '}
        <div className='w-full'>
          <p>
            Finally, I was ready to put all of this work together into a
            website. I wanted to combine the interactive map in my
            Tableau dashboard with the insights into demographic
            information that I explored in my custom graphic. The result
            was{' '}
            <a
              href='https://michaelabela.github.io/US-Food/'
              className='text-blue-600'
            >
              this site
            </a>{' '}
            where users may change the basemap imagery to show total or
            per capita food production and consumption by county. By
            hovering over a county, they can get its demographic
            information. For example, a user could select the Per Capita
            Consumption map view, notice that Todd County, South Dakota
            is colored light green (indicating that its per person
            caloric consumption is much below average), and hover over
            it to find that its population is 75% low income.
          </p>
        </div>
        <div className='mt-5 w-full max-w-full shadow-lg'>
          <img
            src='/assets/us-food-website.png'
            alt='us food website image'
            className='w-full max-w-full'
          />
        </div>
      </div>
    </div>
  );
}

export default USFood;
