import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

export default function SearchInput() {
  return (
    <div className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered input-primary" />
        <button type='submit' className='btn btn-primary'>
            <IoSearchSharp />
        </button>
    </div>
  )
}
