import React from "react";

function EarthIndex() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Earth Index
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium px-5 md:px-40">
        <a
          href="https://www.earthgenome.org/earth-index"
          className="text-blue-600"
        >
          Earth Index
        </a>{" "}
        is a tool built by{" "}
        <a href="https://www.earthgenome.org/" className="text-blue-600">
          Earth Genome
        </a>{" "}
        that allows anyone to harness the power of satellite imagery to better
        understand our planet.
      </p>
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-start gap-5 mt-10">
          <div className="w-1/2 pr-20">
            {" "}
            <h2 className="md:text-3xl text-xl font-semibold mb-2">
              The Story
            </h2>
            <p className="text-base mb-3 font-light text-left">
              Earth Index allows users to train their own visual identification
              models by interacting with embeddings from a foundation model
              applied to optical satellite imagery. We developed Earth Index
              with the particular goal of getting it into the hands of
              indigenous populations in the Amazon who could use it to find
              illegal gold mining operations on their land {"("}see more at{" "}
              <a
                href="https://amazonminingwatch.org/en"
                className="text-blue-600"
              >
                Amazon Mining Watch
              </a>
              {")"}. Listen to me talk about Earth Index at the July 2024 ESIP
              meeting in Asheville, NC!
            </p>
          </div>
          <div className="w-1/2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/e2yoCJTIBHQ?si=ur6KJsXDbecAdQs7&amp;start=1832"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="mt-10 mx-auto w-full">
          <p className="text-base mb-3 font-light text-left">
            Creating a delightful and intuitive interface through which users
            could interact with foundation model embeddings proved to be a
            really interesting challenge and one that I was thrilled to help
            adress while I worked with the team as its lead frontend engineer
            and product manager from October 2023 to August 2024. During that
            time, we went from a proof of concept application hosted in a python
            notebook to a launched web application with dozens of users.
          </p>
        </div>
        <div className="w-full max-w-6xl mx-auto md:flex md:items-start mt-10">
          <div className="md:w-2/5 md:mr-5 mb-5 shadow-lg">
            <img src="/assets/ei-sketches.jpeg" alt="ei sketches" />
          </div>
          <div className="w-3/5">
            <h2 className="md:text-3xl text-xl font-semibold mb-2">
              The Process
            </h2>
            <p className="text-base mb-3 font-light text-left">
              I started with a traditional product management approach. I
              reviewed documentaiton from past user interviews to derive a set
              of product requirements. These requirements were confirmed through
              continuous conversation with partners and users and then distilled
              into potential features. The team gathered in person to discuss
              which of these to prioritize for a limited alpha release and to
              brainstorm / sketch some design directions.
            </p>
            <p className="text-base mb-3 font-light text-left">
              We decided that in the alpha version of Earth Index, users would
              be able to log into secured accounts, create projects for a
              pre-determined set of regions, label points of interest on a map,
              fetch automatically generated "candidates" from our vector
              database, and label these candidates.
            </p>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto md:flex md:items-start mt-10 md:mt-20">
          <div className="w-3/5 px-20">
            <h2 className="md:text-3xl text-xl font-semibold mb-2">
              The Designs
            </h2>
            <p className="text-base mb-3 font-light text-left">
              I worked together with our lead designer on creating a user
              experience which encapsulated these features. This was a great
              learning opportunity for me, since I had an experienced designer
              as my collaborator. He took the lead on creating a coherent theme
              and design system for us to use. I focused particularly on
              designing the project creation experience.
            </p>
            <p className="text-base mb-3 font-light text-left">
              Projects needed to include titles, a single feature that was being
              labeled, a single region of focus, and a time period. Eventually,
              users would be able to include multiple time periods on one
              project so that they could monitor for their feature over time.
              These designs reflect that potentiality.
            </p>
            <p className="text-base  mb-3 font-light text-left">
              At the same time, I took the lead on frontend engineering, with
              our designer assisting.
            </p>
          </div>
          <div className="w-2/5">
            <object
              data="/assets/ei-new-project-designs.pdf"
              type="application/pdf"
              width="100%"
              height="500px"
            >
              <p>
                <a href="/assets/ei-new-project-designs.pdf">
                  Download EI New Project PDF
                </a>
              </p>
            </object>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto md:flex md:items-start mt-10 md:mt-20">
          <div className="w-2/5">
            <object
              data="/assets/ei-frontend.pdf"
              type="application/pdf"
              width="100%"
              height="500px"
            >
              <p>
                <a href="/assets/ei-frontend.pdf">Download EI Frontend PDF</a>
              </p>
            </object>
          </div>
          <div className="w-3/5 px-20">
            <h2 className="md:text-3xl text-xl font-semibold mb-2">
              The Result
            </h2>
            <p className="text-base mb-3 font-light text-left">
              By August of 2024, after a 3 month sprint, we launched the alpha
              version of Earth Index. The frontend was built using React with
              Typescript. Mapbox was our web mapping provider, with a custom
              backend service serving up our own cloud-free processed Sentinel-2
              imagery. Zustand was used for global state management, mantine for
              components, and clerk for authentication.
            </p>
            <p className="text-base mb-3 font-light text-left">
              I took the lead on implementing user analytics libraries, like
              Google Analytics and Hotjar, with the necessary user consent. I
              also helped to manage the onboarding of our first batch of about
              20 users.
            </p>
            <p className="text-base mb-3 font-light text-left">
              Given that the application is in a closed alpha phase, I cannot
              provide access to the site itself. But you can see some selected
              screenshots here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarthIndex;
