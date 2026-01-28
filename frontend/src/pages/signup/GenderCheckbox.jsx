import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex mt-5 gap-10'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text text-white'>Male</span>
                <input 
                type="checkbox" 
                className="checkbox checkbox-accent" />
            </label>
        </div>

        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text text-white'>Female</span>
                <input 
                type="checkbox"
                className="checkbox checkbox-secondary" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox