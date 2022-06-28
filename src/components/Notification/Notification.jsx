import React, { useState } from "react";

function Notification() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="relative">
      <div
        className="relative"
        onClick={() => setShowNotifications((prevStatus) => !prevStatus)}
      >
        <svg
          className="w-4 h-4 lg:w-6 lg:h-6 cursor-pointer fill-charcoal"
          viewBox="0 0 30 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 32C15.9316 32 17.4984 30.4332 17.4984 28.5H10.5017C10.5017 30.4332 12.0685 32 14 32ZM25.7792 23.8127C24.7226 22.6774 22.7457 20.9695 22.7457 15.375C22.7457 11.1258 19.7663 7.72422 15.7489 6.88969V5.75C15.7489 4.78367 14.9658 4 14 4C13.0343 4 12.2511 4.78367 12.2511 5.75V6.88969C8.23379 7.72422 5.25441 11.1258 5.25441 15.375C5.25441 20.9695 3.27746 22.6774 2.2209 23.8127C1.89277 24.1655 1.7473 24.5871 1.75004 25C1.75605 25.8969 2.45988 26.75 3.50551 26.75H24.4946C25.5402 26.75 26.2446 25.8969 26.25 25C26.2528 24.5871 26.1073 24.1649 25.7792 23.8127V23.8127Z" />
          <circle
            cx="22.75"
            cy="7.5"
            r="6"
            stroke="#F7F8FC"
            stroke-width="1.5"
            className="fill-buyellow"
          />
        </svg>
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
              className="border-b pt-2 pb-1 text-10 font-normal font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-normal font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-normal font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-normal font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-normal font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-normal font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-normal font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-normal font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-normal font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-normal font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-normal font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-normal font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-normal font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-normal font-poppins cursor-pointer"
              onClick={() => setShowNotifications(false)}
            >
              Branch <span className="text-buyellow">#22341cd</span> requested
              for 100 blank card.
            </li>
            <li
              className="border-b pt-2 pb-1 text-10 font-normal font-poppins cursor-pointer"
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
