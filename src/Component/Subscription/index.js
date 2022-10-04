import React, { useEffect, useState, useRef } from 'react';
import { Button,Input, Space, Table } from 'antd';
import './index.css'
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import {FaRegEdit} from 'react-icons/fa'
import {AiFillDelete} from 'react-icons/ai'

const Index = () => {
    const [data, setData] = useState([])
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    useEffect(() => {
        fetch('https://633420df433198e79dd0869d.mockapi.io/subscription')
            .then((result) => result.json())
            .then((resp) => {
                console.log("response", resp);
                setData(resp)
            })
    }, [])

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'Mobile/ID',
            dataIndex: 'Id',
            key: 'Id',
            sorter: (a, b) => a.Id.length - b.Id.length,
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Student Name',
            dataIndex: 'Student',
            key: 'Student',
            ...getColumnSearchProps('name'),

        },
        {
            title: 'Class Included',
            dataIndex: 'ClassIncluded',
        },
        {
            title: 'Start Date',
            dataIndex: 'StartDate',
            sorter: (a, b) => a.StartDate.length - b.StartDate.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'End Date ',
            dataIndex: 'EndDate',
            sorter: (a, b) => a.EndDate.length - b.EndDate.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Loan',
            dataIndex: 'Loan',
            sorter: (a, b) => a.Loan.length - b.Loan.length,
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps('name'),

        },
        {
            title: 'Pending Payment',
            dataIndex: 'PendingPayment',
            sorter: (a, b) => a.PendingPayment.length - b.PendingPayment.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title:'Action',
            render: () => <><Button style={{border:"none", outline:"none", background:"transparent"}}><FaRegEdit /></Button>
            <Button style={{border:"none", outline:"none", background:"transparent"}}><AiFillDelete  /></Button>
            </>
        }
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
            />

        </>
    )
}

export default Index
