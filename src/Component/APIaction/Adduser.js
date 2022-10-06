import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, InputNumber } from 'antd';
import React, { useState } from 'react';
import moment from 'moment';

const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';

const Adduser = (props) => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({
        Id: "",
        Student: "",
        ClassIncluded: "",
        StartDate: "",
        EndDate: "",
        Loan: "",
        PendingPayment: "",
    })

    const addUser = () => {
        let apidata = { ...data }
        fetch("https://633420df433198e79dd0869d.mockapi.io/subscription", {
            method: 'POST',
            headers: {
                'Accepts': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(apidata)
        })
            .then((result) => result.json())
            .then((resp) => {
                console.log("add user", resp);
                setData(resp);
                console.log("setData", setData);
            })
        setData({
            Id: "",
            Student: "",
            ClassIncluded: "",
            StartDate: "",
            EndDate: "",
            Loan: "",
            PendingPayment: "",
        });
    }

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                Add Subscription
            </Button>
            <Drawer
                title="Add New Subscription"
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
                <Form layout="horizontal" hideRequiredMark>
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
                            <Input value={data.name} onChange={(e)=>setData({...data, name:e.target.value})}/>
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
                            <Input value={data.ClassIncluded} onChange={(e)=>setData({...data, ClassIncluded:e.target.value})}/>
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
                            <DatePicker defaultValue={moment('2022/04/01', dateFormat)} format={dateFormat} onChange={(e)=>setData({...data, StartDate:e.target.value})}/>
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
                            <DatePicker defaultValue={moment('2023/03/31', dateFormat)} format={dateFormat} onChange={(e)=>setData({...data, EndDate:e.target.value})}/>
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
                            <Input value={data.Student} onChange={(e)=>setData({...data, Student:e.target.value})} placeholder='Search with Register Mobile' />
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
                            <Input value={data.Loan} onChange={(e)=>setData({...data, Loan:e.target.value})} />
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
                            <Input value={data.PendingPayment} onChange={(e)=>setData({...data, PendingPayment:e.target.value})} />
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
                            addUser()
                        }}
                        type="primary">
                        Save
                    </Button>
                    <Button onClick={onClose} danger>Cancel</Button>

                </Space>
            </Drawer>


        </>
    )
}

export default Adduser
