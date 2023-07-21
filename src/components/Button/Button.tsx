import React,{FC} from 'react'
import './Button.css'

interface ButtonProps{
    label:string
}

const Button:FC<ButtonProps> = ({label}) => {
  return (
    <button className='button'>{label}</button>
  )
}

export default Button