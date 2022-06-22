import React ,{useState,useEffect} from "react";
import { getName,updateName } from "./api";


import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Update =()=>{
const navigate = useNavigate();

   

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [contato, setContato] = useState("")
     
     

   
const data={
    nome: nome,
    email: email,
    contato: contato
}
   

    useEffect(()=>{
       loadName()
    
    },[])

const { id } = useParams()


    const loadName= () =>{
    

        getName(id).then((res)=> {
            setNome(res.data.nome)
            setEmail(res.data.email)
            setContato(res.data.contato)
        })

    }

    
    const handleSubmit =(e)=>{
        e.preventDefault()
       
       updateName(id,data).then((res)=>{
        
       
      
       navigate("/")
       })
    }

    const handleCancel =(e)=>{
         e.preventDefault()
        navigate("/")
    }

    return(
       <>
    
        <h2 className="title">Editar usuário</h2>
    
        <form onSubmit={handleSubmit}>
        <input value={nome} setNome={setNome} onChange={(e)=>setNome(e.target.value)}/>
        <br/> <br/>

        <input value={email} setEmail={setEmail} onChange={(e)=>setEmail(e.target.value)}/>
        <br/> <br/>

        <input value={contato} setContato={setContato} onChange={(e)=>setContato(e.target.value)}/>
        <br/> <br/>
        <input type="submit" className="btnAtion1 btnAtion"/>
        <input type="submit" value="cancel" onClick={handleCancel} className="btnAtion2 btnAtion"/>
    </form>
    </>
    )
}
export default Update