import React, {useState} from "react";
import axios from 'axios'
import success from '../asserts/success.png'


function Questions() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [age,setAge]=useState('')
    const [mobile,setMobile]=useState('')
    const [role,setRole]=useState('')
    const [submitted,setSubmitted]=useState(false )
    const [submittedMsg,setSubmittedMsg]=useState('')

    const onSubmit=async(e)=>{
        e.preventDefault();
        if(name==''||email==''||age==''||mobile==''||role==''){
          alert("Please fill all the input fields");
          return;
        }
        console.log(name,email,age,mobile,role);
        await axios({
      method: 'post',
      url: `http://localhost:8000/question`,
      data: {name,email,age,mobile,role}
    }).then(res => {  
        console.log(res);
        setSubmittedMsg(res.data);
        setSubmitted(true);
    })
    }
  return (
    <div className="p-5">
      {!submitted ?
      <div>
      <h1>QUESTIONERIES</h1>
      <div className="card shadow">
        <div className="card-body px-4">
            <label htmlFor="" className="form-lable mt-3">Name</label>
            <input type="text" className="form-control my-3" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} />
            <label htmlFor="" className="form-lable mt-3">Email</label>
            <input type="text" className="form-control my-3" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="" className="form-lable mt-3">Age</label>
            <input type="text" className="form-control my-3" placeholder="Enter your age" value={age} onChange={(e)=>setAge(e.target.value)} />
            <label htmlFor="" className="form-lable mt-3">Mobile Number</label>
            <input type="text" className="form-control my-3" placeholder="Enter your mobile number" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
            <label className="form-label mt-3">Which option best describes you?</label>
            <select className="form-select my-3" value={role} onChange={(e)=>setRole(e.target.value)} >
            <option value="student">Student</option>
            <option value="intern">Intern</option>
            <option value="professional">Professional</option>
            <option value="other">Other</option>
            </select>
            <button className="btn btn-primary my-4" onClick={onSubmit}>Submit</button>
        </div>
      </div>
      </div>:
      <div className="vh-100 d-flex text-center justify-content-center align-items-center">
      <div>
      <h2 className="text-muted my-5">
          Form submitted successfully
        </h2>
        <img src={success} alt="" height="80px" />
      </div>
      </div>
    }

     
    </div>
  );
}

export default Questions;
