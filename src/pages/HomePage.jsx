import { Button, Container, Row, Col } from 'react-bootstrap'
import '../HomePage.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

function HomePage() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    return (
        <div>
            {/* Hero Section */}
            <div id='home' className="hero-section d-flex align-items-center justify-content-center text-white text-center">
                <div className="hero-content">
                    <h1 className="display-4 fw-bold">Welcome to My Website</h1>
                    <p className="lead">Your journey begins here</p>
                    <Button variant="primary" size="lg" onClick={() => navigate('/')}>
                        Get Started
                    </Button>
                </div>
            </div>
            {/*Grid section*/}
            <div id="about">
                <Container className='py-5'>
                <Row className='align-items-center'>
                    {/*Left: Image*/}
                    <Col md={6} className="mb-4 mb-md-0">
                        <img
                            src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80'
                            alt='About'
                            className='img-fluid rounded shadow'

                        />
                    </Col>
                    {/*Right: Text*/}
                    <Col md={6}>
                        <h2 className='mb-4'>Who We Are?</h2>
                        <p>
                            We are a team of passionate creators and thinkers dedicated to making your online experience inspiring and meaningful.
                            Whether you're just starting or looking to level up, we’re here to help you every step of the way.
                        </p>
                        <p>
                            Join us on this exciting journey and be part of a growing community that values creativity, authenticity, and growth.
                        </p>
                        <Button variant='outline-primary' onClick={() => navigate('/login')}>
                            Learn More
                        </Button>
                    </Col>
                </Row>
            </Container>
            </div>
            <div id="portfolio">
                {/* Gallery section */}
            <Container className='py-5'>
                <h2 className='text-center mb-4'>Our Work</h2>
                <Row className='g-4'>
                    {[
                        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
                        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
                        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
                        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
                        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
                    ].map((src, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={2}>
                            <img
                                src={`${src}?auto=format&fit=crop&w=400&q=60`}
                                alt={`Gallery ${index + 1}`}
                                className="img-fluid rounded shadow-sm"
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            </div>
            <div id="info">
                {/* Info Section*/}
            <Container className='py-5 bg-light'>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <h2 className='mb-3'>Why Choose Us</h2>
                        <p>
                            We don’t just build websites. we create experiences that connect, engage, and inspire. Whether you're a startup or
                            an established brand, we bring your vision to life with strategy, design, and technology.
                        </p>
                        <p>
                            Our team is committed to quality, transparency, and results — every step of the way. Let’s build something amazing
                            together.
                        </p>
                        <Button variant='outline-primary'>See Our Work</Button>
                    </Col>
                    <Col md={6} className='mt-4 mt-md-0'>
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                            alt="Why Choose Us"
                            className='img-fluid rounded shadow'
                        />
                    </Col>
                </Row>
            </Container>
            </div>
            <div id="footer">
                {/* Footer Section */}
            <footer className="bg-dark text-white py-5 mt-5">
                <Container>
                    <Row>
                        {/* Column 1: Brand or About */}
                        <Col md={6}>
                            <h5>MyWebsite</h5>
                            <p className="small">
                                Building beautiful, functional web experiences — one project at a time. Thank you for visiting.
                            </p>
                        </Col>

                        {/* Column 2: Quick Links */}
                        <Col md={6} className="text-md-end mt-3 mt-md-0">
                            <ul className="list-unstyled d-flex justify-content-md-end gap-3">
                                <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                                <li><a href="/login" className="text-white text-decoration-none">Login</a></li>
                                <li><a href="/register" className="text-white text-decoration-none">Register</a></li>
                            </ul>
                        </Col>
                    </Row>

                    <hr className="border-secondary" />

                    <div className="text-center small">
                        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
                    </div>
                </Container>
            </footer>
            </div>

        </div>
    )
}

export default HomePage
