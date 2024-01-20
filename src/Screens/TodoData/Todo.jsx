import './Todo.css';
import { useState, useEffect } from 'react';
import Headings from '../../Components/Headings/Headings.jsx';
import TodoInput from '../../Components/TodoInput/TodoInput.jsx';
import AddTodo from '../../Components/AddTodo/AddTodo.jsx';
import Tododata from '../../Components/TodoData/Tododata.jsx';
import EditButton from '../../Components/EditButton/EditButton.jsx';
import DeleteButton from '../../Components/DleleteButton/DeleteButton.jsx';
import NoDataImage from '../../Components/NoDataImage/NoDataImage.jsx';
import { DB, auth } from '../../Config/FirebaseConfig/FirebaseConfig.js';
import { onChildAdded, push, ref, remove, set, update } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from "firebase/auth";
import { Box, Button, Typography } from '@mui/material';

const Todo = () => {

  const navigate = useNavigate();
  const [inpValue, setInpValue] = useState('');
  const [todos,setTodos] = useState([]);
  const [userUID , setUserUID] = useState('');
  const [Data , setData] = useState([]);


  const Chack = ()=>{
    onAuthStateChanged(auth, (user) => {
  if (user) {
  setUserUID(user.uid)
  getData(user.uid) 
  getDataFromDatabase(user.uid)      
  }else{
    console.log('fail');
  }
  });
  }
  useEffect(()=>{
    Chack()
    },[])
  
  
    function getData(uid){
      var reference = ref(DB,`UsersDetails/${uid}`)
      onChildAdded(reference,function(data){
        rander1(data.val())
      })
    }
  const rander1 = (data)=>{
    if(data){
      setData(pre=>[...pre,data])
    }
      }
  
      function getDataFromDatabase(uid){
        // console.log(uid);
        var reference = ref(DB,`Todos/${uid}`)
        onChildAdded(reference,function(data){
          rander2(data.val())
        })
      }
    const rander2 = (data)=>{
      if(data){
        setTodos(pre=>[...pre,data])
      }
        }
        // console.log(todos);
 
  const addTodoHandler= ()=>{
    if(!inpValue){
  alert('Enter Todos')
    }else{
      const obj = {
        todo:inpValue
      }
      const keyRef = ref(DB)
      const key = push(keyRef).key
      obj.id = key
      const reference = ref(DB, `Todos/${userUID}/${obj.id}`)
      set(reference, obj)
  setInpValue('')
    }
  }
  
  const delBtn = (index)=>{
 const delTodo = todos.filter((e,i)=>i!==index)
 const id = todos[index].id
  const refrance = ref(DB,`Todos/${userUID}/${id}`)
  remove(refrance)
  setTodos(delTodo)
  }
  
  const editBtn = (index)=>{
 const newTodo = prompt('Enter new Todo',todos[index].todo)
  todos[index].todo = newTodo
 const id = todos[index].id
  const refrance = ref(DB,`Todos/${userUID}/${id}`)
  update(refrance,{
    todo:newTodo,
  })
  // console.log(newTodo);
  setTodos((pre)=>[...pre])
  }
  
  const SignOut = ()=>{
  signOut(auth).then(() => {
  localStorage.clear()
  navigate('/')  
  }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <>
      <Headings />
      <Box className='main'>
        <TodoInput onChange={(e) => setInpValue(e.target.value)} value={inpValue} />
        <AddTodo onClick={addTodoHandler} />
      </Box>

     

       {todos.length ? todos.map((e, i) => (
        <Box className='TodoList' key={i}>
          <Box className='tododata'>
            <Tododata label={e.todo} />
            <EditButton onClick={() => editBtn(i)} />
            <DeleteButton onClick={() => delBtn(i)} />
          </Box>
        </Box>)) : (<NoDataImage />)} 


      <Box sx={{ marginTop: "100px" }}>
        <Box sx={{ marginTop: "10px", marginLeft: "20px", }}>
          <Typography sx={{ fontSize: "20px" }}> First Name : {Data[1]} </Typography>
          <Typography sx={{ fontSize: "20px" }}> Last Name : {Data[2]}</Typography>
          <Typography sx={{ fontSize: "20px" }}> Email : {Data[4]}</Typography>
        </Box>
        <Box>
          <Button onClick={SignOut} sx={{
            cursor: "pointer",
            marginTop: "10px",
            marginLeft: "20px",
            height: "40px",
            width: "100px",
            fontSize: "20px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            border: "2px solid black",
          }}>LogOut</Button>
        </Box>
      </Box>


    </>
  );
};
export default Todo;
