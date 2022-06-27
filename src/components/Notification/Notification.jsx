import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";

function Notification() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="relative">
      {/* Notification Icon */}
      <div
        className="relative"
        onClick={() => setShowNotifications((prevStatus) => !prevStatus)}
      >
        {/* Yellow Dot */}
        <div className="absolute right-1 top-0.5 w-1.5 h-1.5 lg:w-2 lg:h-2  select-none pointer-events-none rounded-full bg-buyellow border-[1.5px] border-bggray"></div>
        <IoIosNotifications className="text-lg lg:text-2xl text-grayShade cursor-pointer" />
      </div>

      {/* Notification Display */}
      {showNotifications && (
        <div className="absolute right-full top-4 z-50 flex flex-col bg-white shadow-md rounded-[10px] w-60 max-h-72 py-3 px-2">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h6 className="text-xs font-bold">Notifications</h6>
            <span className="text-[8px] text-buyellow font-semibold font-poppins underline cursor-pointer">
              Mark all as read
            </span>
          </div>

          {/* Filter Section */}
          <div className="mt-3 border-b">
            <div className="flex gap-1 items-center justify-start border-b-2 border-black w-fit p-1 font-poppins">
              <span className="font-bold text-[10px]">All</span>
              <span className="bg-buyellow text-white text-[10px] py-0.5 px-1 rounded-md">
                15
              </span>
            </div>
          </div>

          {/* Notification Lists */}
          <ul className="flex-1 overflow-y-auto">
            <li
              className="border-b pt-2 pb-1 text-[10px] font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-[10px] font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-[10px] font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-[10px] font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-[10px] font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-[10px] font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-[10px] font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-[10px] font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-[10px] font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-[10px] font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-[10px] font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-[10px] font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-[10px] font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-[10px] font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-[10px] font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Notification;
