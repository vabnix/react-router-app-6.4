import React from 'react'
import {NavLink, Outlet} from 'react-router-dom';

export default function CareerLayout() {
  return (
    <div className='careers-layout'>
      <h2>Career Opportunities</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor assumenda, itaque nesciunt alias voluptatum nobis blanditiis eos officiis aperiam earum eum vel quas odio optio, distinctio ab sunt unde incidunt ipsum omnis amet magnam accusantium aut! Excepturi, cupiditate iusto!</p>
        
        <Outlet />
    </div>
  )
}
