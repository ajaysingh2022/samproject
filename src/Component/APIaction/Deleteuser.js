import React from 'react'
import { Button } from 'antd'
import { AiFillDelete } from 'react-icons/ai'


const Deleteuser = (props) => {
    const [userdata, setUserData] = React.useState([props.dataSource ? props.dataSource : userdata])
    console.log(props);



    const deleteUser = (id) => {
        fetch(`https://633420df433198e79dd0869d.mockapi.io/subscription/${id}`, {
            method: 'DELETE'
        })
            .then((result) => result.json())
            .then((resp) => {
                console.log("deleteuser", resp);
                setUserData(resp)
            })


    }
    return (
        <>
            <Button onClick={() => deleteUser(props.dataIndex.id)} style={{ border: "none", outline: "none", background: "transparent" }}><AiFillDelete /></Button>
        </>
    )
}

export default Deleteuser
