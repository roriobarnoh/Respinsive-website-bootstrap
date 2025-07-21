import React, { useState } from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

function Register() {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.password || !form.confirm) {
            setError('All fields are required.');
        } else if (form.password !== form.confirm) {
            setError('Passwords do not match.');
        } else {
            setError('');
            try {
                await register(form);
                navigate('/');
            } catch (err) {
                setError('Registration failed.');
            }
        }
    };

    return (
        <Container className='d-flex align-items-center justify-content-center vh-100'>
            <Card style={{ width: '100%', maxWidth: '450px' }} className='p-4 shadow'>
                <h2 className='text-center mb-4'>Register</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='registerName'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Full Name'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='registerEmail'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='registerPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={form.password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='registerConfirm'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Confirm Password'
                            name='confirm'
                            value={form.confirm}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button variant='primary' type='submit' className="w-100">
                        Register
                    </Button>
                </Form>
                <div className="mt-3 text-center">
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </Card>
        </Container>
    );
}

export default Register;
