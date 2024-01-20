import './DeleteButton.css'
// import DeleteIcon from '@mui/icons-material/Delete';


 const DeleteButton = ({onClick}) => {
  return (
        <>
        {/* <DeleteIcon  className='btn' onClick={onClick}/> */}
        <span  className='btn' onClick={onClick} >Delete</span>
        </>
  )
}
export default DeleteButton;