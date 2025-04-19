import React from 'react'
const Title = ({ title, highlight, subtitle, isCenter = true }) => {
    return (
      <div className={`${isCenter ? "text-center" : "text-left"} mb-12`}>
        <div className="max-w-[800px] mx-auto flex flex-col items-center justify-center py-12">
          <h2 className="capitalize text-2xl md:text-3xl font-bold mb-4 lg:text-4xl">
            {title}{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {highlight}
            </span>
          </h2>
  
          <p className="text-gray-300 md:text-lg">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default Title;
  