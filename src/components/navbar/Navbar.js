import React from 'react'
import {logo} from '../../assets/index'
import { navLinkData } from '../../constants'

function Navbar() {
  return (
    <div className='w-full h-20 mx-auto flex justify-between items-center'>
        <div>
            <img src={logo} alt="logo"/>
        </div>
        <div>
            <ul className='flex items-center gap-10'>
                {
                    navLinkData.map((navlink) => (
                        <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300' key={navlink._id}>
                            {navlink.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Navbar