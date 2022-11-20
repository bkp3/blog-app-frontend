import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Row, Table } from 'reactstrap';
import pp from "../msd.jpg"
import { getCurrentUserDetail, isLoggedIn } from '../auth'
const ViewUserProfile = ({ user }) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [login, setLogin] = useState(false)
    useEffect(() => {
        setCurrentUser(getCurrentUserDetail())
        setLogin(isLoggedIn())
    }, [])

    return (
        <Card className='mt-2 border-0 rounded-0 shadow-sm'>
            <CardBody>
                <h3>USER INFORMATION</h3>
                <Container className='text-center'>
                    <img src={user.image ? user.image : pp} alt="user profile picture" className='image-fluid rounded-circle' style={{ maxWidth: '250px', maxHeight: '250px' }} />
                </Container>
                <Table responsive striped hover bordered={true} className='mt-5 text-center'>
                    <tbody>
                        <tr>
                            <td>
                                BLOG ID
                            </td>
                            <td>
                                {user.id}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                USER NAME
                            </td>
                            <td>
                                {user.name}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                USER EMAIL
                            </td>
                            <td>
                                {user.email}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                ABOUT
                            </td>
                            <td>
                                {user.about}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                ROLE
                            </td>
                            <td>
                                {
                                    user.roles.map((role) => {
                                        return (
                                            <div key={role.id}>{role.name}</div>
                                        )
                                    })
                                }
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
            {
                currentUser ? (currentUser.id == user.id) ? (
                    <CardFooter className='text-center'>
                        <Button color='warning'>Update Profile</Button>
                    </CardFooter>
                ) : '' : ''
            }
        </Card>
    )
}

export default ViewUserProfile