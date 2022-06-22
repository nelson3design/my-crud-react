import React ,{useState,useEffect} from "react";

 import axios from 'axios'

import { getNames,removeName } from "./api";


import {Link} from 'react-router-dom'

const Crud =() =>{

    
     
      const [users, setUsers] = useState([])

      const [value, setValue] = useState("")

      useEffect(()=>{
     
        loadNames()
          
         
      },[])

      const loadNames =()=> getNames().then((response)=> {
        setUsers(response.data)
        console.log(response.data)
      })

  

      const handleSearch= async (e)=>{
        e.preventDefault()
         return await axios 
         .get(`http://localhost:5000/data?q=${value}`)
         .then((response)=>{
          setUsers(response.data)
          
           
            setValue("")
            console.log(response.data)
            
         })
        
    }


   


    const handleRemove=((id)=>{
         if(window.confirm('tem certeza de excluir esse usuáorio')){
            
            removeName(id).then((res)=>{
               
                loadNames()
            }).catch((error)=>{
            
            if(error.response.data === 400) console.log(error.response.data)
        })
         }
    })

    
      return(
        <>
        <h2 className="title">lista de usuários</h2>
        <Link to="/adicionar" className="btnAdd">Adicionar Usuário</Link>
         <br/><br/>

         <form onSubmit={handleSearch}>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} className="pes"/>
            <input type="submit" value="pesquisar" className="btnPes"/>
         </form>

        <br/>
         <table border="1px" width="100%">
            <thead className="thead">
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Contato</th>
                    <th>Ações</th>
                </tr>
            </thead>
            {
              
              users && users.map((item)=>(
               <tbody key={item.id}>
                    
                <tr>  
                    <td data-label="Nome">{item.nome}</td>
                    <td data-label="Email">{item.email}</td>
                    <td data-label="Contato">{item.contato}</td>

                    <td data-label="Ações">
                        <Link to={`/update/${item.id}`}>
                           <button className="btnAtion1 btnAtion">Editar</button>
                        </Link>
                
                       
                        <button onClick={()=>handleRemove(item.id)} className="btnAtion2 btnAtion">Excluir</button>
                    </td>
                </tr>
            </tbody>
            ))
          
            
            }

        </table>
        </>
      )

}

export default Crud