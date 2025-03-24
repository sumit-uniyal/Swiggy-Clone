import React, { useState } from 'react'
import axios from 'axios'
import {app_url} from '../Constant'
import {useNavigate} from 'react-router-dom'

const AddRestaurant = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    contact: '',
    address: '',
    image: null,
  });


  const handleChange = (e)=>{
      const {name,value,type} = e.target
      if(type === 'file'){
        setFormData({...formData,[name]:e.target.files[0]})
      }else{
        setFormData({
          ...formData,
          [name]:value
        })
      }
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const URL = app_url+'restaurant/add'
      const response = await axios.post(URL,formData,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      })
      navigate('/admin')
      
    } catch (error) {
      console.log('error in creating resturant '+error)
    }
  }
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Restaurant</h2>
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="4"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
          Contact Number
        </label>
        <input
          type="tel"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
          className="mt-1 w-full text-sm text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          accept="image/*"
          required
        />
      </div>

      <div className="mb-4 flex justify-center">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default AddRestaurant