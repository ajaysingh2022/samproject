import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, InputNumber } from 'antd';
import React, { useState } from 'react';
import moment from 'moment';
import { FaRegEdit } from 'react-icons/fa'

const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';

const Edituser = (props) => {
    const [open, setOpen] = useState(false);
    const { dataSource, dataIndex, ...inputprops } = props
    const [userdata, setUserData] = React.useState([dataSource ? dataSource : userdata[{
        Id: "",
        Student: "",
        ClassIncluded: "",
        StartDate: "",
        EndDate: "",
        Loan: "",
        PendingPayment: "",
    }]])
    // const [data, setData] = useState({
    //     Id: "",
    //     Student: "",
    //     ClassIncluded: "",
    //     StartDate: "",
    //     EndDate: "",
    //     Loan: "",
    //     PendingPayment: "",
    // })

    const [date, setDate] = useState("")

    const dateChange = (value) => {
        console.log("datechange", value);
        setDate(value);

    }

    // console.log("edit props", props);

    const editUser = (Id) => {
        let flag = dataSource ? dataSource[Id - 1] : userdata[Id - 1];
        console.log("id", flag);
        setUserData(flag, { ...dataSource })
    }
    const updateUser = () => {
        let item = { ...dataSource};
        console.log("item", item);
        fetch(`https://633420df433198e79dd0869d.mockapi.io/subscription/${item.Id}`, {
            method: 'PUT',
            headers: {
                'Accepts': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => result.json())
            .then((resp) => {
                console.log(resp);
                setUserData(resp);
            })
            setUserData({
            Id: "",
            Student: "",
            ClassIncluded: "",
            StartDate: "",
            EndDate: "",
            Loan: "",
            PendingPayment: ""
        })

    }

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button onClick={() => {
                showDrawer()
                editUser(dataIndex.Id)
            }}
                style={{ border: "none", outline: "none", background: "transparent" }}>
                <FaRegEdit />
            </Button>


            <Drawer
                title="Subscription Details"
                width={400}
                onClose={onClose}
                open={open}
                bodyStyle={{
                    paddingBottom: 80,
                }}
            // extra={
            //  
            // }
            >
                <Form layout="horizontal" >
                    <Row gutter={8}>
                        <Form.Item
                            name="Id"
                            label="Subscription ID"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter  name',
                                },
                            ]}
                        >
                            <Input value={userdata.name} onChange={(e) => setUserData({ ...userdata, name: e.target.value })} />
                        </Form.Item>
                    </Row>
                    {/* <Row gutter={8}>
                        <Form.Item
                            name="url"
                            label="Subscription Type"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter url',
                                },
                            ]}
                        >
                            <Select placeholder="Please select Subscription">
                                <Option value="month">Monthly</Option>
                                <Option value="year">Yearly</Option>
                                <Option value="progress">Yearly with Progress Lock</Option>
                            </Select>
                        </Form.Item>
                    </Row> */}
                    <Row gutter={8}>
                        <Form.Item
                            name="ClassIncluded"
                            label="Class Included:"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter  name',
                                },
                            ]}
                        >
                            <Input value={userdata.ClassIncluded} onChange={(e) => setUserData({ ...userdata, ClassIncluded: e.target.value })} />
                        </Form.Item>
                    </Row>
                    {/* <Row gutter={8}>
                        <Form.Item
                            name="classtype"
                            label="Class Type"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter url',
                                },
                            ]}
                        >
                            <Select placeholder="Please select Class Type">
                                <Option value="month">Recorded Classes</Option>
                                <Option value="year">Recorded & Live Classes</Option>
                                <Option value="progress">Live & Live Recorded Classes</Option>
                                <Option value="progress">Limited Amount of Live Classes</Option>

                            </Select>
                        </Form.Item>
                    </Row> */}
                    <Row gutter={8}>
                        <Form.Item
                            name="StartDate"
                            label="Start Date"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please choose the dateTime',
                                },
                            ]}
                        >
                            <DatePicker defaultValue={moment('2022/04/01', dateFormat)} format={dateFormat} value={date} onChange={dateChange} />
                        </Form.Item>
                    </Row>
                    <Row gutter={8}>
                        <Form.Item
                            name="EndDate"
                            label="End Date"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please choose the dateTime',
                                },
                            ]}
                        >
                            <DatePicker defaultValue={moment('2023/03/31', dateFormat)} format={dateFormat} value={date} onChange={dateChange} />
                        </Form.Item>
                    </Row>
                    <Row gutter={8}>
                        <Form.Item
                            name="Student"
                            label="Student:"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter  name',
                                },
                            ]}
                        >
                            <Input value={userdata.Student} onChange={(e) => setUserData({ ...userdata, Student: e.target.value })} placeholder='Search with Register Mobile' />
                        </Form.Item>
                    </Row>
                    <Row gutter={8}>
                        <Form.Item
                            name="Loan"
                            label="Price:"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter  name',
                                },
                            ]}
                        >
                            <Input value={userdata.Loan} onChange={(e) => setUserData({ ...userdata, Loan: e.target.value })} />
                        </Form.Item>
                    </Row>
                    <Row gutter={8}>
                        <Form.Item
                            name="PendingPayment"
                            label="Pending:"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter  name',
                                },
                            ]}
                        >
                            <Input value={userdata.PendingPayment} onChange={(e) => setUserData({ ...userdata, PendingPayment: e.target.value })} />
                        </Form.Item>
                    </Row>
                    {/* <Row gutter={8}>
                        <Form.Item
                            name="accessprofile"
                            label="Access Profile"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter url',
                                },
                            ]}
                        >
                            <Select placeholder='Select Access Profile' >
                                <Option value="month">Standard</Option>
                                <Option value="year">Desktop</Option>
                                <Option value="progress">All</Option>
                            </Select>
                        </Form.Item>
                    </Row> */}

                </Form>
                <Space>
                    <Button
                        onClick=
                        {() => {
                            onClose()
                            updateUser()
                        }}
                        type="primary">
                        Update
                    </Button>
                    <Button onClick={onClose} danger>Cancel</Button>

                </Space>
            </Drawer>

        </>
    )
}

export default Edituser
