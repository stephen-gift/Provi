import React from "react";

const Cards = () => {
  return (
    <>
      <main className="w-2/3 ml-72">
        <section className="flex gap-1">
          <h1 className="text-gold font-bold text-lg">Providus</h1>
          <h1 className="font-bold text-lg">Banking Card Queue</h1>
        </section>
        <section>
          <form action="" className="flex items-center pt-10 justify-between">
            <label htmlFor="">State:</label>
            <select name="" id="" className="">
              <option value="">Abuja, Nigeria</option>
              <option value="">Lagos, Nigeria</option>
              <option value="">Rivers State, Nigeria</option>
              <option value="">Bayelsa, Nigeria</option>
              <option value="">Ogun, Nigeria</option>
            </select>
            <div className="flex items-center">
              <label htmlFor="" className="pr-3">Filter By:</label>
              <input type="date" name="" id="" placeholder="none" />
              <div className="px-3">to</div>
              <input type="date" name="" id="" />
            </div>
            <button className="bg-buyellow h-10 rounded-md w-40 font-bold" type="submit">Print</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Cards;
