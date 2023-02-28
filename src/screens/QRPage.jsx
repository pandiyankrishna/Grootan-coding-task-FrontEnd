import React,{useState} from "react";
import QRCode from "react-qr-code";
import io from "socket.io-client"
import success from '../asserts/success.png'

function QRPage() {

  const [id,setId]=useState(Math.floor(100000 + Math.random() * 900000))
  const [submited,setSubmited]=useState(false)

  let socket = io("http://localhost:8000/");
  socket.on('submited', msg => {
    setSubmited(true)
})

  return (

    <div className="vh-100 d-flex text-center justify-content-center align-items-center">
    {!submited ?
      <div>
        <h1 className="text-primary mb-6">Quiz Camp</h1>
        <h2 className="text-muted my-5">
          Visitors, scan the following qr code
        </h2>
        <QRCode value={`http://localhost:3000/questions`} size="150" />
      </div> :
      <div>
      <h2 className="text-muted my-5">
          Form submitted successfully
        </h2>
        <img src={success} alt="" height="80px" />
      </div>
    }
    </div>
  );
}

export default QRPage;
