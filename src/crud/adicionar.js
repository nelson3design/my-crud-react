import React ,{useState} from "react";



import {  createName } from "./api";


import { useNavigate } from 'react-router-dom';

const Add =() =>{
const navigate = useNavigate();
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [contato, setContato] = useState("")
     
     

   
const data={
    nome: nome,
    email: email,
    contato: contato
}
   

    const handleSubmit=((e)=>{
        e.preventDefault()

        if(nome==="" && email==="" && contato===""){
            navigate("/")
        }else{

            createName(data).then((res)=>{
               
                
                navigate("/")
                
            }).catch((error)=>{
               
                if(error.response.data === 400) console.log(error.response.data)
            })
        }
       
    })


  
      return(
        <>
         <h2 className="title">adicionar usuário</h2>
        

        <form onSubmit={handleSubmit}>
        <input value={nome} setNome={setNome} onChange={(e)=>setNome(e.target.value)} placeholder="Nome"/>
        <br/> <br/>

        <input value={email} setEmail={setEmail} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
        <br/> <br/>

        <input value={contato} setContato={setContato} onChange={(e)=>setContato(e.target.value)} placeholder="Contact"/>
        <br/> <br/>
        <input type="submit" className="btnAtion1 btnAtion"/>
        <input type="submit" value="cancel" className="btnAtion2 btnAtion"/>
    </form>
        
        </>
      )

}

export default Add