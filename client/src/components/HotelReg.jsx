import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelReg = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <form className="flex bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-md:mx-2 overflow-hidden">
        <img
          src={assets.regImage}
          alt="reg-image"
          className="w-1/2 object-cover hidden md:block"
        />
        <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
          <img
            src={assets.closeIcon}
            alt="close-icon"
            className="absolute top-4 right-4 w-5 cursor-pointer hover:scale-110 transition"
          />
          <p className="text-2xl font-semibold mt-4 mb-2 text-gray-800">
            Register Your Hotel
          </p>

          <div className="w-full mt-4">
            <label htmlFor="name" className="font-medium text-gray-600">
              Hotel Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Type here"
              className="border border-gray-300 rounded-lg w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light focus:ring-2 focus:ring-indigo-200 transition"
              required
            />
          </div>
          <div className="w-full mt-4">
            <label htmlFor="contact" className="font-medium text-gray-600">
              Phone
            </label>
            <input
              id="contact"
              type="text"
              placeholder="Type here"
              className="border border-gray-300 rounded-lg w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light focus:ring-2 focus:ring-indigo-200 transition"
              required
            />
          </div>
          <div className="w-full mt-4">
            <label htmlFor="address" className="font-medium text-gray-600">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Type here"
              className="border border-gray-300 rounded-lg w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light focus:ring-2 focus:ring-indigo-200 transition"
              required
            />
          </div>

          <div className="w-full mt-4 max-w-60 mr-auto">
            <label htmlFor="city" className="font-medium text-gray-600">
              City
            </label>
            <select
              id="city"
              className="border border-gray-300 rounded-lg w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light focus:ring-2 focus:ring-indigo-200 transition"
              required
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white mr-auto px-8 py-2 rounded-lg shadow mt-8 font-medium text-base cursor-pointer"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default HotelReg