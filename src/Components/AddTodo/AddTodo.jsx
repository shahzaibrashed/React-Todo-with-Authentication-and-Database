import './AddTodo.css'
import React from 'react'
// import AddCircleIcon from '@mui/icons-material/AddCircle';
const AddTodo = ({onClick}) => {
  return (
   <div>
   
     <span className='AddCircle' sx={{height:"40px",width:"40px",color:"cadetblue",paddingBottom:"3px"}} onClick={onClick}>+</span>
   </div>
  )
}
export default AddTodo;