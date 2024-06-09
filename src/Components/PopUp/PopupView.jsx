import React from 'react'

const PopupView = ({userName, data, setShowPopup}) => {
    console.log(data);
    console.log(userName);
    console.log(setShowPopup);
  return (
    <div className='wrapper'>
     <div className="popup">
        <div className="btn-wrap">
             <h4><span>{userName}</span> kullanıcısının gönderileri</h4>
             <button onClick={()=> setShowPopup(false)}>Kapat</button>
        </div>
        {
            !data ? (<p>Yükleniyor..</p>) : 
            data.map((post)=> (
                <div key={post.id} className='post'>
                    <h1>{post.title}</h1>
                    <p>{post.text}</p>
                </div>
            ))
        }
     </div>
    </div>
  )
}

export default PopupView
