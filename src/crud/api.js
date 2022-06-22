
 import axios from 'axios'
export const getNames= async  ()=>{
    return  await axios.get('https://nelsondb.herokuapp.com/data/')
}


export const createName= async  (nome,email,contato)=>{
    return  await axios.post('https://nelsondb.herokuapp.com/data/',nome,email,contato)
}

export const removeName= async  (id)=>{
    return  await axios.delete('https://nelsondb.herokuapp.com/data/'+ id)
}


export const getName= async  (id)=>{
    return  await axios.get('https://nelsondb.herokuapp.com/data/'+ id)
}

export const updateName= async  (id,nome,email,contato)=>{
    return  await axios.put('https://nelsondb.herokuapp.com/data/'+ id,nome,email,contato)
}


export const searchName= async  (nome)=>{
    return  await axios.get('https://nelsondb.herokuapp.com/data?q='+ nome)

}


