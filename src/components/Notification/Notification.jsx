import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";

function Notification() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="relative">
      <div
        className="relative"
        onClick={() => setShowNotifications((prevStatus) => !prevStatus)}
      >
        <div className="absolute right-0.5 top-0.5 w-1.5 h-1.5 lg:w-2 lg:h-2 select-none pointer-events-none rounded-full bg-buyellow border-1.5 border-ghostWhite"></div>
        <IoIosNotifications className="text-lg lg:text-2xl text-charcoal cursor-pointer" />
      </div>

      {showNotifications && (
        <div className="absolute right-full top-4 z-50 flex flex-col bg-white shadow-md rounded-lg w-60 max-h-72 py-3 px-2">
          <div className="flex items-center justify-between">
            <h6 className="text-xs font-bold">Notifications</h6>
            <span className="text-8 text-buyellow font-semibold font-poppins underline cursor-pointer">
              Mark all as read
            </span>
          </div>

          <div className="mt-3 border-b">
            <div className="flex gap-1 items-center justify-start border-b-2 border-black w-fit p-1 font-poppins">
              <span className="font-bold text-10">All</span>
              <span className="bg-buyellow text-white text-10 py-0.5 px-1 rounded-md">
                15
              </span>
            </div>
          </div>

          <ul className="flex-1 overflow-y-auto">
            <li
              className="border-b pt-2 pb-1 text-10 font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-semibold font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-semibold font-poppins cursor-pointer"
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
