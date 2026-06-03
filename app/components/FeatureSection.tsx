import React from "react";

const FeatureSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6 lg:py-24">
          <div className="mb-10 max-w-screen-md lg:mb-16">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              At Green World Initiative, our work is rooted in principles that
              guide every tree we plant and every community we serve.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-lime-100 bg-lime-50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lime-100">
                <svg
                  className="h-5 w-5 text-lime-700 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Environmental Restoration
              </h3>
              <p className="leading-7 text-gray-600">
                We are committed to healing the Earth by restoring degraded
                lands through the planting of trees and crops. Every seed sown
                is a step toward reversing deforestation, preserving
                biodiversity, and combating climate change.
              </p>
            </div>
            <div className="rounded-2xl border border-lime-100 bg-lime-50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lime-100">
                <svg
                  className="h-5 w-5 text-lime-700 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Community Empowerment
              </h3>
              <p className="leading-7 text-gray-600">
                We believe lasting change begins with local communities. By
                involving farmers, youth, and volunteers in our planting
                efforts, we create ownership, sustainable livelihoods, and a
                shared vision for a greener future.
              </p>
            </div>
            <div className="rounded-2xl border border-lime-100 bg-lime-50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lime-100">
                <svg
                  className="h-5 w-5 text-lime-700 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Sustainable Action
              </h3>
              <p className="leading-7 text-gray-600">
                Our approach combines ecological wisdom with long-term
                responsibility. We prioritize planting native species, promoting
                agroforestry, and maintaining the health of ecosystems to ensure
                that our impact grows with time.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default FeatureSection;
