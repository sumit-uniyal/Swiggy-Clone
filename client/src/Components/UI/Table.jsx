import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchResData } from '../../Store/Slices/RestaurantSlice';
import {NavLink} from 'react-router-dom'

const Table = () => {
    const dispatch = useDispatch();
      const mData = useSelector((state) => state.restaurant.mData);
    
      useEffect(() => {
        dispatch(fetchResData());
      }, [dispatch]);
    
      const resData = mData.data;

    return (
        <>
            <NavLink 
                className='bg-[#F45204] ml-4 p-2 mt-10 rounded-2xl text-white block w-33' 
                to='/admin/add-restaurant'>
                Add Restaurant
            </NavLink>
            <div className="mt-10 px-4">
                <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                {resData ?(
                    <table className="min-w-full table-auto border-separate border-spacing-0">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                        <th className="py-3 px-6 text-left text-sm font-semibold">#</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold">Name</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold">Address</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resData.map((res,index)=>(
                            <tr className="border-b border-gray-200 hover:bg-gray-100" key={res._id}>
                                <td className="py-3 px-6 text-sm text-gray-800">{index+1}</td>
                                <td className="py-3 px-6 text-sm text-gray-800 flex items-center">
                                    <img src={res.image} className="h-15 w-15 rounded-4xl mr-4" />
                                    <span className="text-gray-800">{res.name}</span>
                                </td>
                                <td className="py-3 px-6 text-sm text-gray-800">{res.address}</td>
                                <td className="py-3 px-6 text-sm text-gray-800">{res.contact}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                    
                ):(
                    <h3>Loading ...</h3>
                )}
                </div>
            </div>
        </>
    );
  };

export default Table