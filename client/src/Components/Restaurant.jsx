import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchResData } from '../Store/Slices/RestaurantSlice';

const Restaurant = () => {
  const dispatch = useDispatch();
  const mData = useSelector((state) => state.restaurant.mData);

  useEffect(() => {
    dispatch(fetchResData());
  }, [dispatch]);

  const resData = mData.data;
  console.log(resData);

  if (resData) {
    return (
      <div className="mt-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {resData.map((restaurant, index) => (
            <div
              key={restaurant._id || index}
              className="bg-white rounded-xl shadow-md p-4 transition-transform transform hover:scale-105"
            >
              <div className="w-full h-50 overflow-hidden rounded-lg">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-lg font-semibold mt-3 text-gray-900">
                {restaurant.name}
              </h3>
              <p className="text-gray-600 text-sm">{restaurant.address}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div className="text-center text-lg text-gray-700 mt-10">Loading...</div>;
  }
};

export default Restaurant;
