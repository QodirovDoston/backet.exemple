import axios from "axios"
import React, { useEffect, useState } from "react"
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { postData } from '../api/PostMethod';

export function FormData() {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    
    const PostData = async () => {
        const url = "http://localhost:3000/data"
        const obj = {
            name: name,
            age: age
        }
        await postData(url, obj).then((res) =>{
            console.log(res)
            if(res.status === 201){
                alert(res.statusText)
                setAge("")
                setName("")
            }
        })
    }
    return (
        <Container>
            <Row className='justify-content-center mt-5'>
                <Col xs={5}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" value={name} placeholder="Enter email" onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text"  value={age} placeholder="Password" onChange={(e) => setAge(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" onClick={PostData}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

// import React from 'react'
// export  function Form() {
//     const getDataAll = async () => {
//         const url = "https://jsonplaceholder.typicode.com/users"
//          let res = await getData(url)
//          console.log(res)
//       }
//       useEffect(() => {
//         getDataAll()
//       }, [])     

//   return (
//     <div>
      
//     </div>
//   )
// };


    export function Get() {
        const [data,setData] = useState([])
        const getData =()=>{
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setData(res.data))
        }
        useEffect(()=>{
            getData()
        },[])
    return (
        <>
        {data.map(e => {
            return (
                <h1>{e.name}</h1>
            )
        })}
        </>
    )
    }
    export default  Get
