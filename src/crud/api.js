
 import axios from 'axios'
export const getNames= async  ()=>{
    return  await axios.get('http://localhost:5000/data')
}


export const createName= async  (nome,email,contato)=>{
    return  await axios.post('http://localhost:5000/data',nome,email,contato)
}

export const removeName= async  (id)=>{
    return  await axios.delete('http://localhost:5000/data/'+ id)
}


export const getName= async  (id)=>{
    return  await axios.get('http://localhost:5000/data/'+ id)
}

export const updateName= async  (id,nome,email,contato)=>{
    return  await axios.put('http://localhost:5000/data/'+ id,nome,email,contato)
}


export const searchName= async  (nome)=>{
    return  await axios.get('http://localhost:5000/data?q='+ nome)
}