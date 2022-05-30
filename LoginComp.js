import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Form, FormText, Row } from 'react-bootstrap'
import Image from "../Assets/login.png"
import img from "../Assets/Logo.png"
import { Button } from 'react-bootstrap'
import '../Components/Logincss.css';
import { useNavigate } from 'react-router-dom'




function LoginComp() {
  const [admin, setadmin] = useState([])
  const [userData, setuserData] = useState({
    username: "",
    password: ""
  })
  const [usernameError, setusernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"))
    if (admin) {
      setadmin(admin)
    }
  }, [])

  console.log("admin user is", admin.username);
  console.log("admin pass is", admin.password);
  console.log("userData user is", userData.username);
  console.log("userData pass is", userData.password);
  const validateUsername = () => {
    if (userData.username) {
      if (admin.username == userData.username) {
        setusernameError("");
        return true;
      } else {
        setusernameError("*Enter valid Username");
      }
    } else {
      setusernameError("*Username is Required");
    }
    return false;
  };

  const validatePassword = () => {
    if (userData.password) {
      if (admin.password == userData.password) {
        setPasswordError("");
        return true;
      } else {
        setPasswordError(`*Enter valid password`);
      }
    } else {
      setPasswordError("*Password is Required");
    }
    return false;
  };
  let navigate = useNavigate();

  let navigateToLogin = () => {
    navigate("/Admin");
  };

  let updateUserData = (event) => {
    setuserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  }
  let submitData = (event) => {
    event.preventDefault();
    validateUsername()
    validatePassword()
    if (validateUsername() && validatePassword()) {
      navigateToLogin()
      setuserData({
        username: "",
        password: "",
      });
    }
  }
  return (
    <div className='login' >
      <Container>

        <Row className='row'>
          <Col  >
            {/* <Card.Img className="login_img" src={Image} /> */}

            <div>
              <Card.Img className="login_img" variant="top" src={Image} />
              {/* <h1 className='motivation'>Good things on your way! </h1> */}

            </div>
            <h1 className='motivation'>Good things on your way! </h1>


          </Col>
          <Col className="col2">

            <Form><div className="loginform">

              <Card.Img className="login_field" style={{ width: "15rem", height: "5rem" }} variant="top" src={img} /><br />

              <Form.Text className='login_text'>Login</Form.Text>
              <Form.Group className="mb-1" controlId="formBasicEmail">

                <Form.Label className="login_atr">EMPLOYEE ID</Form.Label>
                <Form.Control className="login_space"
                  value={userData.username}
                  name="username"
                  type="text" placeholder=""
                  onChange={(event) => {
                    updateUserData(event);
                  }} />
                {usernameError && <div className="errormsg">{usernameError}</div>}

              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label className="login_atr" >PASSWORD</Form.Label>
                <Form.Control className="login_space"
                  type="password" placeholder="" name="password"
                  onChange={(event) => {
                    updateUserData(event);
                  }}
                />
                {passwordError && <div className="errormsg">{passwordError}</div>}

              </Form.Group>
              <Button className='button1' type="submit" onClick={submitData}>
                LOGIN
              </Button>
              <Button className='button2' type="cancle">
                CANCEL
              </Button>
              <FormText className="xyz">Already have and account?</FormText>
              <FormText className="register"> REGISTER</FormText><br />
              <FormText className="cpw"> Change password</FormText>
            </div>
            </Form>
          </Col>
        </Row>
      </Container></div>
  )
}


export default LoginComp