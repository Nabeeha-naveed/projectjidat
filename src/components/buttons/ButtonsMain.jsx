import React from 'react'
import "./button.css"

export default function ButtonsMain(props) {
  return (
    <div className='BtnMain'>
        <button className='btn'><a className="btnlink" href={props.link} target="_blank">{props.btn}</a></button>
    </div>
  )
}