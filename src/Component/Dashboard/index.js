import React from 'react';
import "./index.css";
import { Menu } from 'antd';
import { AiOutlineBell, AiOutlineUser } from 'react-icons/ai'

const Index = () => {
    return (
        <>
            {/* <div className=' main-container '>
                <div className=' header-container'>
                    <div className='left_header'>

                        <div className=' image-div'>
                            <img src='http://sams.webologixglobal.com/static/images/logo/CD_Logo-Full_White.png' />
                        </div>
                        <div className='center-header  '>
                            <div class="dropdown drop ">
                                <Button className=''>Dashboard</Button>

                            </div>

                            <div class="dropdown ml-10">
                                <p className=' drop'>Student</p>
                                <div className="dropdown-content ">
                                    <p className=' drop  text-[#1E88E5] hover:bg-[#1E88E5] rounded-xl py-2'>Subscription </p>
                                    <p className=' drop  text-[#1E88E5] hover:bg-[#1E88E5] rounded-xl py-2'>Students</p>


                                </div>
                            </div>


                            <div class="dropdown ml-10">
                                <p className=' drop text-white font-sans font-semibold '>Academics</p>
                                <div class="dropdown-content ">
                                    <p className=' drop py-2 text-[#1E88E5] hover:bg-[#1E88E5] rounded-xl'>Syllabus </p>
                                    <p className=' drop py-2 text-[#1E88E5] hover:bg-[#1E88E5] rounded-xl'>Test Create</p>
                                    <p className=' drop py-2 text-[#1E88E5] hover:bg-[#1E88E5] rounded-xl'>Time Table</p>

                                </div>
                            </div>

                            <div class="dropdown ml-10 ">
                                <p className=' drop  text-white font-sans font-semibold '> User </p>
                                <div class="dropdown-content">
                                    <p className=' drop py-2 text-[#1E88E5] hover:bg-[#1E88E5] rounded-xl'>User </p>
                                    <p className=' drop py-2 text-[#1E88E5] hover:bg-[#1E88E5] rounded-xl'>CMS</p>
                                    <p className=' drop py-2 text-[#1E88E5] hover:bg-[#1E88E5] rounded-xl '>Reviewer</p>

                                </div>
                            </div>
                            <div class="dropdown ml-10">
                                <p className=' drop  text-white font-sans font-semibold'>Other</p>
                                <div className="dropdown-content ">
                                    <p className=' drop py-2  text-[#1E88E5] hover:bg-[#1E88E5] rounded-xl ' >App Organiser </p>
                                    <p className=' drop py-2 text-[#1E88E5] hover:bg-[#1E88E5] rounded-xl '>Website</p>
                                    <p className=' drop py-2 text-[#1E88E5] hover:bg-[#1E88E5] rounded-xl '>Support</p>
                                    <p className=' drop py-2 text-[#1E88E5] hover:bg-[#1E88E5] rounded-xl '>Sales</p>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='right_header  flex-1   items-center'>
                        <div className=' flex justify-end   mr-8'>
                            <div className="styledInput  mr-8">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input className="ml-2 focus:outline-none " placeholder="search" />
                            </div>
                            <span className='circle bg-white drop_hover square mr-8'><Button ><i class="fa-solid  fa-bell"></i> </Button>
                            </span>
                            <div className="down ">
                                <span className='circle bg-white square'><Button className=' drop_hover'><i class="fa-solid fa-user  mr-1"></i>
                                </Button></span>
                                <div className="down-content">
                                    <p className=' drop py-2 text-gray-600 hover:bg-[#1E88E5] rounded-xl '>My Profile</p>
                                    <p className=' drop py-2 text-gray-600 hover:bg-[#1E88E5] rounded-xl '>Change Password</p>
                                    <p className=' drop py-2 text-gray-600 hover:bg-[#1E88E5] rounded-xl'>Change Super Password</p>
                                    <p className=' drop py-2 text-gray-600 hover:bg-[#1E88E5] rounded-xl '>Logout</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}

            <header>
                <setion className="header-container">
                    <div className='left-header'>
                        <span className=' image-div'>
                            <img src='http://sams.webologixglobal.com/static/images/logo/CD_Logo-Full_White.png' alt='' />
                        </span>
                        <div className='center-header dropdown drop dropdown-content '>
                            <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
                                <Menu.Item key="mail" >
                                    Dashboard
                                </Menu.Item>
                                <Menu.SubMenu key="SubMenu" title="Student" >
                                    <Menu.Item key="two" >
                                        Subscription
                                    </Menu.Item>
                                    <Menu.Item key="three" >
                                        Students
                                    </Menu.Item>
                                </Menu.SubMenu>
                                <Menu.SubMenu key="SubMenu" title="Academics" >
                                    <Menu.Item key="four" >
                                        Syllabus
                                    </Menu.Item>
                                    <Menu.Item key="five" >
                                        Time Table
                                    </Menu.Item>
                                    <Menu.Item key="six" >
                                        test Create
                                    </Menu.Item>
                                </Menu.SubMenu>
                                <Menu.SubMenu key="SubMenu" title="User" >
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
                                <Menu.SubMenu key="SubMenu" title="Other" >
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
                    <div className='right-header  '>
                        <div className=' right-header-inner'>
                            <div className="styledInput">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input placeholder="search" />
                            </div>
                            <span className='circle drop_hover square'><button ><AiOutlineBell /> </button>
                            </span>
                            <div className="down ">
                                <span className='circle bg-white square'><button className=' drop_hover'><AiOutlineUser />
                                </button></span>
                                <div className="down-content">
                                    <p className=' drop py-2 text-gray-600 hover:bg-[#1E88E5] rounded-xl '>My Profile</p>
                                    <p className=' drop py-2 text-gray-600 hover:bg-[#1E88E5] rounded-xl '>Change Password</p>
                                    <p className=' drop py-2 text-gray-600 hover:bg-[#1E88E5] rounded-xl'>Change Super Password</p>
                                    <p className=' drop py-2 text-gray-600 hover:bg-[#1E88E5] rounded-xl '>Logout</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </setion>
            </header>
        </>
    )
}

export default Index;
