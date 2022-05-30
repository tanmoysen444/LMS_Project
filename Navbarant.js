import { Button, Col, Image, Input, Layout, Row } from 'antd'
import { Content, Footer, Header } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import React from 'react'

import '../Components/navbarant.css'
import Sidebar1 from './Sidebar1'
import BreadCrumb from './BreadCrumb';
import BatchTable from './BatchTable'
import SearchBar from './SearchBar'
import SearchBar2 from './SearchBar2'
import { ButtonGroup, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import BatchModel from './BatchModel'

export default function Navbarant() {
  return (
    <>
      <Layout>
        <div style={{ background: "#FFFF" }}>

          <Image className="navbarimg" src={require("../Assets/logo1.png")}></Image>
          <Input className='place' placeholder="Q Search Mentor / Employee" />
          {/* <SearchBar /> */}
          <Button className="button" >
            Logout
          </Button></div>
        <Row><Col xs={1}>
          <Sider>
            <Sidebar1 />
          </Sider></Col>
          <Col xs={11}>
            <div>
              <BreadCrumb /><Row><Col xs={2}>
                <Card.Text style={{ color: "#FAA81D" }}>Batch list</Card.Text></Col>
                <Col xs={8}>
                  <Input className='place2' placeholder="Q Search" />
                  {/* <SearchBar2 /> */}
                </Col><Col xs={2}>
                  {/* <Button className="add_btn">+New Batch</Button > */}
                  <BatchModel />
                </Col></Row>
              <Content>
                <BatchTable />
              </Content>
            </div >
          </Col>
        </Row>

      </Layout >
    </>
  )
}

