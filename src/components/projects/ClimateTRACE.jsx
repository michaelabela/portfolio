import React from 'react';

function ClimateTRACE() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>
        Climate TRACE Data Insights
      </h1>
      <p className='text-base md:text-xl mb-3 font-medium px-5 md:px-40'>
        <a href='https://climatetrace.org/' className='text-blue-600'>
          Climate TRACE
        </a>{' '}
        is an asset-level, third-party greenhouse gas emissions
        database. It uses AI and ML to independently measure emissions
        from individual sources, such that its data does not rely on
        self-reported figures from emitters themselves. I spent 6 months
        working with their team on deriving actionable insights from
        Climate TRACE data.
      </p>
      <div className='w-full max-w-6xl mx-auto md:flex md:items-start mt-10 md:mt-20'>
        <div className='md:w-2/5 m-5'>
          <h2 className='md:text-3xl text-xl font-semibold mb-2'>
            Inventory Comparisons
          </h2>
          <p className='text-base mb-2 text-left'>
            There are many existing greenhouse gas emissions
            inventories. EDGAR and UNFCCC have their own databases that
            are regularly utilized. A common question that we would get
            asked at Climate TRACE was: "why are your estimates
            different from others?" In order to answer this question, I
            built an application in Python that would automatically
            generate comparison charts between our inventory and others
            using Plotly. The differences between emissions estimates
            would get broken down by country, sector, subsector,
            gas-type, and other attributes such that the cause of the
            difference between estimates could be identified. This
            required an extensive analysis process to map the sectors
            between various emissions inventories.
          </p>
          <p className='text-base mb-2 text-left'></p>
        </div>
        <div className='md:w-3/5 m-5'>
          <img
            src='/assets/ct-inventory-comparison.png'
            alt='inventory comparison image'
          />
        </div>
      </div>
      <div className='w-full max-w-6xl mx-auto md:flex md:items-start mt-10 md:mt-20'>
        <div className='md:w-3/5 m-5 flex flex-col gap-10'>
          <img
            src='/assets/idn-fertilizer.png'
            alt='fertilizer image'
            width='500px'
          />
          <img
            src='/assets/ind-deforestation.jpg'
            alt='deforestation image'
            width='500px'
          />
        </div>
        <div className='md:w-2/5 m-5'>
          <h2 className='md:text-3xl text-xl font-semibold mb-2'>
            Map Making
          </h2>
          <p className='text-base mb-2 text-left'>
            Sometimes potential partners would come to us with a
            particular use case in mind. They might want to establish an
            emissions estimate baseline for a region in which they are
            launching a campaign for regenerative agriculture so that
            they can measure future success at achieving emissions
            reductions against this initial baseline. In other cases,
            partners might be curious about the potential applications
            of Climate TRACE emissions estimates and request that we
            produce an example use case for them to consider. In cases
            like these, I would often put together a map that
            demonstrates the utility of Climate TRACE estimates. Because
            our inventory is at the asset level, it can provide very
            fine-grained visualizations of emissions in a country or
            region.
          </p>
          <p className='text-base mb-2 text-left'>
            In these examples to the left, I created maps visualizing
            Climate TRACE emissions estimates using QGIS. The top map
            shows synthetic fertilizer emissions in India with an inset
            map zoomed to Andhra Pradesh specifically. The bottom map
            shows deforestation (as measured through the loss of carbon
            storage in trees) and reforestation in Indonesia.
          </p>
          <p className='text-base mb-2 text-left'></p>
        </div>
      </div>
      <div className='w-full max-w-6xl mx-auto md:flex md:items-start mt-10 md:mt-20'>
        <div className='md:w-2/5 m-5'>
          <h2 className='md:text-3xl text-xl font-semibold mb-2'>
            Tool Creation
          </h2>
          <p className='text-base mb-2 text-left'>
            I also created an interactive tool on Observable that allows
            for users to explore emissions factors in our database.
            Emissions factors represent the emissions produced per unit
            of output for a given process. For example, the tonnes of
            carbon dioxide emitted per tonne of steel produced. In the
            tool, users can rank countries according to their average
            emissions factor for a given process in a given sector.
            Check it out{' '}
            <a
              href='https://observablehq.com/d/b534a9b1c99fa7f3'
              className='text-blue-600'
            >
              here
            </a>
            .
          </p>
          <p className='text-base mb-2 text-left'></p>
        </div>
        <div className='md:w-3/5 m-5'>
          <img src='/assets/ct-efs.png' alt='emissions factors image' />
        </div>
      </div>
    </div>
  );
}

export default ClimateTRACE;
