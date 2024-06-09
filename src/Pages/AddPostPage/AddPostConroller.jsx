
import { useState } from 'react';
import AddPostModel from './AddPostModel'
import AddPostView from './AddPostView'
import api from "./../../constants"
import { useNavigate } from 'react-router-dom';

const AddPostConroller = () => {

const navigate = useNavigate()

 const formModel = new AddPostModel()
//  console.log(formModel);

 const[form ,setForm] = useState(formModel.state)
//  console.log(form);

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(!form.user || !form.title || !form.text){
      alert("Lütfen tüm alanları doldurunuz.")
      return;
    }

    api.post("/posts" ,form).then((res) => navigate("/")) 
    
  }

  //key:hangi inputa yazildiginin bilgisidir
  //e :inputun icindeki deger
  const onInputChange =(key,e)=>{
    console.log(key);
    console.log(e);

    setForm({...form , [key]: e.target.value})

  }
console.log(form);



  return (
    <AddPostView  handleSubmit={handleSubmit} onInputChange={onInputChange}/>
  )
}

export default AddPostConroller
