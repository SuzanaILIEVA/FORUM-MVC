import React, { useEffect, useState } from 'react'
import PopupView from './PopupView'
import api from './../../constants'

const PopupController = ({userName ,setShowPopup}) => {
    const [data,setData] = useState(null)
    useEffect(()=>{

        api.get(`/posts?user=${userName}`).then((res)=>setData(res.data))

    },[userName])
console.log(data);

  return (
    <PopupView userName={userName} data={data} setShowPopup={setShowPopup}/>
  )
}

export default PopupController
