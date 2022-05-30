
import { Checkbox } from 'antd';
import React, { useState } from 'react'
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import Dropdowntech from './Dropdowntech';
import Calendar1 from './Calendar1';
import MultipleSelect from './MultiSelector';


function BatchModel() {
  let getData=(mydata)=>{
    console.log("mydata is::",mydata);
    // setbatchData({...batchData,Technologies:mydata})

 return mydata
  }
   
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [batchData, setbatchData] = useState({
    Batch_Name: "",
    Mentor_Name: "",
    Technologies: "",
    Start_Date: "",
    End_Date: "",
  })
  let saveData = () => {
    localStorage.setItem("batchData", JSON.stringify(batchData))
    handleClose()
    setbatchData({
      Batch_Name: "",
      Mentor_Name: "",
      Technologies:"",
      Start_Date: "",
      End_Date: "",
    })
  }
  
  /* const [saveBatch, setsaveBatch] = useState([])
 let getDataFromBatch=(batchData)=>{
 let batchDataCopy=[...saveBatch];
 batchDataCopy.push(batchData);
 localStorage.setItem("batchDataCopy",JSON.stringify(batchDataCopy))
 setsaveBatch(batchDataCopy)
 handleClose()
 }*/

  console.log("BatchName is", batchData.Batch_Name);
  console.log("MantorName is", batchData.Mentor_Name);
  console.log("Technologies is", batchData.Technologies);
  console.log("Start_Date is", batchData.Start_Date);
  console.log("End_Date is", batchData.End_Date);
  let updateUserData = (event) => {
    setbatchData({
      ...batchData,
      [event.target.name]: event.target.value,
    });
  }

 
  return (
    <>
      <Button style={{ background: "#FAA81D", borderRadius: "8px" }} onClick={handleShow}>
        +Add Batch
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#086288" }}>Add new batch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Batch Name</Form.Label>
            <Form.Control type="text" value={batchData.Batch_Name} placeholder='' name='Batch_Name'
              onChange={(event) => {
                updateUserData(event);
              }} /> </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mentor Name</Form.Label>
            <Form.Select className="custom-select" name="Mentor_Name" onChange={(event) => {
              updateUserData(event);
            }}>
              <option value="Satyam" >Satyam </option>
              <option value="Megha" >Megha</option>
              <option value="Chandan" >Chandan  </option>
            </Form.Select></Form.Group><br />
          <Form.Group className="mb-3">
            <Form.Label>Technologies</Form.Label>
            <MultipleSelect getData={getData} name="Technologies" onChange={(event) => {
              updateUserData(event);
            }} />
          </Form.Group><br />
          <label for="Start_Date" >Start Date</label><br />
          {/* <Calendar1/> */}
          <input type="date" id="Start_Date" name="Start_Date" onChange={(event) => {
            updateUserData(event);
          }} /><br />
          {/* <Calendar1/> */}
          <label for="End_Date">End Date</label><br />
          <input type="date" id="End_Date" name="End_Date" onChange={(event) => {
            updateUserData(event);
          }} />

          {/* <Dropdowntech/> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={saveData}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default BatchModel