import React from 'react'

const Button = ({color, background, title}) => {
  return (
    <button style={{color:{color}, background:{background}}}>{title ? title:""}</button>
  )
}

export default Button