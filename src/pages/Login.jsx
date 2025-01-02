import React from 'react'
import Card from '../components/presentation/Card'
import { InputAdornment, TextField } from '@mui/material'
import Button from '../components/presentation/Button'
// import { ReactComponent as UserIcon } from '../assets/icons/user-icon.svg'; 
import lockIcon from '../assets/icons/lock-icon.svg';
import userIcon from '../assets/icons/user-icon.svg';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <Card>
                <h1>Login</h1>
                <p className="login-p">
                    Enter  your Credential to access your account
                </p>

                <div className='flex flex-col gap-4'>
                    <TextField
                        variant="outlined"
                        placeholder="Your Email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <img src={userIcon} alt="" />
                                </InputAdornment>
                            ),
                        }}
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        placeholder="Your Password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <img src={lockIcon} alt="" />
                                </InputAdornment>
                            ),
                        }}
                        fullWidth
                    />
                </div>
                <div className='flex justify-between items-center my-[50px]'>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="remember-me" id="remember-me" />
                        <label className='remember-me-label' htmlFor="remember-me">Remember Me</label>
                    </div>
                    <Link to="/forgot-password" className="link">Forgot Password?</Link>
                </div>

                <Button label={"Create Account"} type={'primary'} className='w-full mt-4'>Login</Button>
            </Card>
        </div>
    )
}

export default Login