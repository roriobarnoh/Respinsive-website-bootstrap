import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'
import { useAuth } from '../auth/AuthContext';

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="login-background d-flex align-items-center justify-content-center vh-100">
            <Container>
                <Card className="login-card p-4 shadow-lg">
                    <h2 className='text-center mb-4'>Login</h2>
                    {error && <div className="text-danger text-center mb-3">{error}</div>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mb-3' controlId='loginEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='loginPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant='primary' type='submit' className='w-100 rounded-pill'>
                           
                            Login
                        </Button>
                    </Form>
                    <div className="text-center mt-3">
                        Don't have an account? <Link to="/register" className="text-decoration-none">Register</Link>
                    </div>
                </Card>
            </Container>
        </div>
    );
}

export default Login;
