import React from 'react'
import { Card, CardBody, CardHeader, Col, NavItem, Row, Table } from 'reactstrap'; 
import axios from 'axios';
import {useState, useEffect } from 'react'

function ContactList(props) {
    const [data, setData] = useState({});
  

    useEffect (() => {
        const GetData = async () => {
            const result = await axios("https://localhost:44381/api/UserContact");
            setData(result.data);
        };

        GetData();
    }, []);
    
    const deleteContact = (id) => {
        axios.delete("https://localhost:44381/api/UserContact?id="+id)
        .then(response => {
            if (response.data !=null) {
                alert("Contact deleted successfully.");
                
            }
            
        });
        const remainingContact = data.filter((result) => result.id !== id)
            setData(remainingContact);
        
    };
   
    return (
        <div className="animated fadeIn">
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                         <i className="fa fa-align-justify"></i> Contact List 
                        </CardHeader>
                    <CardBody>
                        <Table hover bordered striped responsive size="sm"> 
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Comment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   data.map && data.map((item, idx) => {
                                        return <tr key = {item.id}>
                                            
                                            <td>{item.fullName}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.email}</td>
                                            <td>{item.comment}</td>
                                            <td>
                                                <div class="btn-group">
                                                <button className="btn btn-warning" onClick={deleteContact.bind(this, item.id)  
                                                 }>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default ContactList;