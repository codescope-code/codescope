"use client";

import CountUp from 'react-countup';
export default function Ournumber() {
  return (
    <div className="bg-black text-white flex items-center justify-center px-4 py-30 border-b-1 border-gray-700">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-40">
          <div>
            <h2 className="text-xl text-gray-400 mb-1">Founded</h2>
            <p className="text-5xl font-bold">
              <CountUp end={2024} duration={2}  separator="" />
            </p>
            <p className="text-sm text-gray-500 mt-2">Year of foundation</p>
          </div>

          <div>
            <h2 className="text-xl text-gray-400 mb-1">Product Features</h2>
            <p className="text-5xl font-bold">
              <CountUp end={200} duration={3} suffix="+" />
            </p>
            <p className="text-sm text-gray-500 mt-2">Features we offer</p>
          </div>

          <div>
            <h2 className="text-xl text-gray-400 mb-1">Digital assets</h2>
            <p className="text-5xl font-bold">
              <CountUp end={100} duration={4} suffix="+" />
            </p>
            <p className="text-sm text-gray-500 mt-2">Our available assets</p>
          </div>

          <div>
            <h2 className="text-xl text-gray-400 mb-1">Number of Users</h2>
            <p className="text-5xl font-bold">
              <CountUp end={2021} duration={5}  separator="" />
            </p>
            <p className="text-sm text-gray-500 mt-2">Total users to date</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="1.jpg"
            alt="Statistics Graphic"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

