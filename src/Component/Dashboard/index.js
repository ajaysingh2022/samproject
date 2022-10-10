import React from 'react';
import "./index.css";
import { Menu } from 'antd';
import { AiOutlineUser } from 'react-icons/ai'
import Cdlogo from '../../Assests/Dashboard/CD-Logo.png'
import { NavLink } from 'react-router-dom';


const Index = () => {
    return (
        <>
            <header>
                <setion className="header-container">
                    <div className='left-header'>
                        <span className=' image-div'>
                            <img src={Cdlogo} alt='' />
                        </span>
                        <div className='center-header  '>
                            <Menu style={{ background: "#1890ff", color: "#fff", borderBottom: "none", marginLeft: "10rem" }} className="menu-item" mode="horizontal" >
                                <Menu.Item key="one" >
                                    <span><NavLink to='/' style={{color:'#fff'}} >  Dashboard</NavLink></span>
                                </Menu.Item>
                                <Menu.SubMenu key="SubMenu" title="Student" style={{ marginLeft: "5rem" }}>
                                    <Menu.Item key="two" >
                                        <span><NavLink to='/subscription'  > Subscription</NavLink></span>
                                    </Menu.Item>
                                    <Menu.Item key="three" >
                                        Students
                                    </Menu.Item>
                                </Menu.SubMenu>
                                <Menu.SubMenu key="academics" title="Academics" style={{ marginLeft: "5rem" }}>
                                    <Menu.Item key="four" >
                                        Syllabus
                                    </Menu.Item>
                                    <Menu.Item key="five" >
                                        Time Table
                                    </Menu.Item>
                                    <Menu.Item key="six" >
                                        Test Create
                                    </Menu.Item>
                                </Menu.SubMenu>
                                <Menu.SubMenu key="user" title="User" style={{ marginLeft: "5rem" }}>
                                    <Menu.Item key="seven" >
                                        User
                                    </Menu.Item>
                                    <Menu.Item key="eight" >
                                        CMS
                                    </Menu.Item>
                                    <Menu.Item key="nine" >
                                        Reviewer
                                    </Menu.Item>
                                </Menu.SubMenu>
                                <Menu.SubMenu key="other" title="Other" style={{ marginLeft: "5rem" }} >
                                    <Menu.Item key="ten" >
                                        App Organiser
                                    </Menu.Item>
                                    <Menu.Item key="eleven" >
                                        Website
                                    </Menu.Item>
                                    <Menu.Item key="twelve" >
                                        Support
                                    </Menu.Item>
                                    <Menu.Item key="thirteen" >
                                        Sales
                                    </Menu.Item>
                                </Menu.SubMenu>
                            </Menu>
                        </div>
                    </div>
                    <div>
                        <Menu style={{ background: "#1890ff", color: "#fff", borderBottom: "none" }} className="menu-item" mode="horizontal" >

                            <Menu.SubMenu key="profile" title={<AiOutlineUser />}  >
                                <Menu.Item key="fourteen" >
                                    My Profile
                                </Menu.Item>
                                <Menu.Item key="fifteen" >
                                    Change Password
                                </Menu.Item>
                                <Menu.Item key="sixteen" >
                                    Logout
                                </Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </div>

                </setion>
            </header>
        </>
    )
}

export default Index;
