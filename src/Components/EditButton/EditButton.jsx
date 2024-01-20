import './EditButton.css'
// import EditIcon from '@mui/icons-material/Edit';

 const EditButton = ({onClick}) => {
  return (
   <>
    {/* <EditIcon sx={{color:"red"}} className='btn' onClick={onClick} /> */}
    <span sx={{color:"red"}} className='btn' onClick={onClick}>Edit</span>
    </>
  )
}
export default EditButton;