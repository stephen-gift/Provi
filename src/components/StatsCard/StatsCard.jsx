import React from "react";

function StatsCard({ data }) {
  return (
    <div className="my-12 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
      {data?.map(({ title, total }, key) => (
        <div className="group bg-white rounded-lg border border-grayScale hover:border-buyellow cursor-pointer flex items-center justify-center gap-3 flex-col p-2 min-h-[130px] transition ease-out duration-300">
          <h3 className="text-center lg:text-xl font-semibold text-lgray group-hover:text-buyellow transition ease-out duration-200">
            {title}
          </h3>
          <span className="text-xl lg:text-3xl font-bold text-lblack group-hover:text-buyellow transition ease-out duration-200">
            {total}
          </span>
        </div>
      ))}
    </div>
  );
}

export default StatsCard;
