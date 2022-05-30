import { Radio } from 'antd';
import React, { useState } from 'react'
import "../Components/sidebar1.css"

function Sidebar1() {
  const [replace, setreplace] = useState("");
  const updateReplace=(e)=>{
    setreplace(e.target.value)
  }
  return (
    <Radio.Group value={replace} onChange={updateReplace}>
      <Radio.Button className="btn" value="batch">
      {(replace=="batch")? <img className='batchbtn' src={require("../Assets/group.png")} alt=""/>:<img className="difbtn" src={require("../Assets/group1.png")}/> }
      </Radio.Button>
      <Radio.Button className="btn" value="mantor">
      {(replace=="mantor")? <img className='batchbtn' src={require("../Assets/Mentor.png")} alt=""/>:<img className="difbtn" src={require("../Assets/Mentor1.png")}/> }
      </Radio.Button>
      <Radio.Button className="btn" value="request">
      {(replace=="request")? <img className='batchbtn' src={require("../Assets/request.png")} alt=""/>:<img className="difbtn" src={require("../Assets/request1.png")}/> }
      </Radio.Button>
    </Radio.Group>
  )
}

export default Sidebar1