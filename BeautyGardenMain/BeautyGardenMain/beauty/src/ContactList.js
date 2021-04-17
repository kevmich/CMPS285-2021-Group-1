import React from 'react'
import Linkify from "react-linkify";
import axios from 'axios';
import {useState, useEffect } from 'react'
import "./ContactList.css"



function ContactList(props) {
    const [data, setData] = useState({});
  

    useEffect (() => {
        const GetData = async () => {
            const result = await axios("/api/UserContact");
            setData(result.data);
        };

        GetData();
    }, []);
    
    const deleteContact = (id) => {
        if (window.confirm('Delete?'))
        axios.delete("/api/UserContact?id="+id)
        .then(response => {
            if (response.data !=null) {
                alert("Contact deleted successfully.");
                const remainingContact = data.filter((result) => result.id !== id)
            setData(remainingContact);
            }
            
        });
        
    };
   
    
        return (
          <div className="container-fluid">
            <div className="row mt-3"><div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  Contact List
                </div>
                <div className="card-body">
                  <table className="table table-hover">
                    <thead className="thead-dark"><tr><th><h5>Name</h5></th><th>Phone Number</th><th>Email</th><th>Comment</th><th></th></tr></thead>
                    <tbody>
                                {
                                   data.map && data.map((item, idx) => {
                                        return <tr key = {item.id}>
                                            
                                            <td>{item.fullName}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td><Linkify>{item.email}</Linkify></td>
                                            <td>{item.comment}</td>
                                            <td>
                                                <div className="btn-group">
                                                <i className="fas fa-trash-alt fa-2x" onClick={deleteContact.bind(this, item.id)  
                                                 }></i>
                                                </div>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                  </table>
                
              </div>
            </div>
          </div>
         </div>
        </div>
       );
      }
    
   /* return (
        <div className="animated fadeIn" >
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                         <i className="fa fa-align-justify"></i> Contact List 
                        </CardHeader>
                    <CardBody>
                        <Table striped hover bordered responsive size="sm"> 
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
                                                <div className="btn-group">
                                                <button className="btn btn-secondary" onClick={deleteContact.bind(this, item.id)  
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
}*/
export default ContactList;