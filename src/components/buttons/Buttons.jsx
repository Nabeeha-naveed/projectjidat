import React from 'react'
import ButtonsMain from './ButtonsMain'

function Buttons() {
  return (
    <div className='btnsDiv'>
      <div className='empty'></div>
      <ButtonsMain
        btn= "Project Jidat's Core Team Internship Form"
        link= "https://docs.google.com/forms/d/e/1FAIpQLSestuQ3qHUkTmlojNnZdkyYhXZo8u5kswM8YqTjvCxanqoWgw/viewform?usp=sf_link"
      />

      <ButtonsMain
        btn= "Project Jidat's Volunteer Program Application "
        link= "https://docs.google.com/forms/d/e/1FAIpQLSd4Z1I3UBHlKd7WnmgIt8GQzmtSaZPlrZg9Q-hYrP9twolBcQ/viewform?usp=sf_link"
      />

      <ButtonsMain
        btn= "Project Jidat"
        link= ""
      />
      <div className='emptyB'></div>
    </div>
  )
}

export default Buttons