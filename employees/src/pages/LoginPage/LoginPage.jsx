import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import { assets } from "../../assets/assets";

const LoginPage = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { login } = useAuth();
    // const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // clear error when user start typing
        if (error) setError('')
    };

    const handleSubmint = (e) => {
        e.preventDefault();
        setLoading(true)
        setError('')
        try {
            const success = login(formData.email, formData.password)
            if (success) {
                navigate('/dashboard')
            } else {
                setError('Invalid email or password')
            }
        } catch (error) {
            setError('An error occured during login')
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <div className='min-h-screen flex items-center justify-center bg-gray-100'>
                <div className='bg-white p-15 rounded-lg shadow-lg w-full max-w-md'>
                    <div className='flex items-center justify-center'>
                        <img src={assets.healthlogo} alt="A Helth Logo" className='w-40 h-20' />
                    </div>
                    <div className='flex items-center justify-center gap-3.5 my-8'>
                        <Button
                            variant='primary'
                            size='large'
                        >
                            Login
                        </Button>

                        <Button
                            variant='secondary'
                            size='large'
                            onClick={() => navigate('/register')}
                        >
                            Register
                        </Button>
                    </div>
                    <form action="" onSubmit={handleSubmint}>
                        <div className='relative'>
                            <InputField
                                label="Username or Email"
                                type="email"
                                name="email"
                                placeholder="Enter your username or email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <img src={assets.User} className='w-4 h-4 absolute top-9 right-3' />
                        </div>
                        <div className='relative'>
                            <InputField
                                label="Password"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className='mt-8'
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <img src={assets.Eye} className='w-4 h-4 absolute top-9 right-3 cursor-pointer' />
                        </div>

                        <div className='text-right'>
                            <a href="" className='text-blue-600 text-sm'>Forget Password?</a>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="large"
                            className='w-full'
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
