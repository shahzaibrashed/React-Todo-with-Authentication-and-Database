import './TodoInput.css'

const TodoInput = ({onChange,value}) => {
  return (
    <div>
        <input value={value}  onChange={onChange} type="text" placeholder='Enter Todo Data' />
    </div>
  )
}
export default TodoInput;