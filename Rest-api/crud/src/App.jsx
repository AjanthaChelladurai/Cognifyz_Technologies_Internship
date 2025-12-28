import './App.css'
import { useState,useEffect } from 'react'
import { Button,EditableText,InputGroup} from "@blueprintjs/core";

function App() {
  const[users,setUsers]=useState([]);
  const [newname,setNewname]=useState("");
  const [newemail,setNewemail]=useState("");
  const [newwebsite,setNewwebsite]=useState("");
      useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json() )
        .then((json)=>setUsers(json))
      },[])

      function onChangeHandler(id,key,value){
        setUsers((users)=>{
          return users.map(user =>{
            return  user.id ==id ? {...user,[key] : value} : user;
          })
        })

      }
      
      function updateUser(id){
        const user=users.find((user)=> user.id === id)
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method:"PUT",
          body:JSON.stringify(),
          headers:{
            "content-Type":"application/json; charset=UTF-8"
          }
        }
      ).then((response)=>response.json())
        .then(data=>{
        })
      
      }

      function deleteUser(id){
            const user=users.find((user)=>user.id === id)
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
              {
                   method : "DELETE",
              }).then(response =>response.json())
              .then(data=>{
                setUsers((users)=>{
                  return users.filter(user => user.id !== id)

              })
           })
      }
      
 
     function addUser(){
      const name=newname.trim();
      const email=newemail.trim();
      const website=newwebsite.trim();
      if(name && email && website)
      {
        fetch("https://jsonplaceholder.typicode.com/users",
        {
          method:"POST",
          body:JSON.stringify({
            name,
            email,
            website
          }),
          headers:{
            "content-Type":"application/json; charset=UTF-8"
          }
        }
      ).then((response)=>response.json())
        .then(data=>{
          setUsers([...users,data]);
          setNewname("");
          setNewemail("");
          setNewwebsite("");
        })
        
      }
     }
  return (
   <div className='App'>
      <table className="bp4-html-table bp4-html-table-striped bp4-interactive">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>WEBSITE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td><EditableText onChange={value => onChangeHandler(user.id, 'email', value) } value={user.email}/></td>
                <td><EditableText onChange={value => onChangeHandler(user.id, 'website', value) } value={user.website}/></td>
                <td>
                  <Button intent="primary" onClick={()=>updateUser(user.id)}>Update</Button>
                  <Button intent="danger" onClick={()=>deleteUser(user.id)}>Delete</Button>
                </td>
           </tr>
          )}
        </tbody>
        <tr>
        <td></td>
        <td>
          <InputGroup
          value={newname}
          onChange={(e)=>setNewname(e.target.value)}
          placeholder='Enter Name....'/>
        </td>
         <td>
          <InputGroup
          value={newemail}
          onChange={(e)=>setNewemail(e.target.value)}
          placeholder='Enter Email....'/>
        </td>
         <td>
          <InputGroup
          value={newwebsite}
          onChange={(e)=>setNewwebsite(e.target.value)}
          placeholder='Enter Website....'/>
        </td>
        <Button intent="success" onClick={addUser}>
          Add +
        </Button>
        </tr>
      </table>
    </div>
  )
}

export default App
