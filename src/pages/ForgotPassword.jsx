import React, { useState } from 'react'
import { InputAdornment, TextField } from '@mui/material'
import Card from '../components/presentation/Card'
import emailFilled from '../assets/icons/email-filled.svg';
import successFilled from '../assets/icons/success-filled.svg';
import emailIcon from '../assets/icons/email-icon.svg';
import lockIcon from '../assets/icons/lock-icon.svg';
import Button from '../components/presentation/Button';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState('forgetPassword'); 

  const routeToLogin = () => {
    navigate('/login');
  };

  const renderCard = () => {
    switch (currentState) {
      case 'forgetPassword':
        return (
          <Card>
            <h1>Forget Password</h1>
            <p className='w-full mt-[36px] mb-[46px]'>
              No worries! Enter your email address below, and we will send you a link to reset your password.
            </p>
            <div className='mb-[33px] flex flex-col gap-[14px]'>
              <label className='bold-label' htmlFor="email">Email</label>
              <TextField
                id='email'
                variant="outlined"
                placeholder="Your Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={emailIcon} alt="" />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
            </div>
            <Button label={"Submit"} type={'primary'} className='w-full' onClick={() => {setCurrentState('checkEmail')}} />
          </Card>
        );
        
      case 'checkEmail':
        return (
          <Card>
            <div className='flex items-center justify-center'>
              <div className='icon-container mb-[45px]'>
                <img src={emailFilled} alt="" />
              </div>
            </div>
            <h1 className='text-center'>Check Your Email</h1>
            <p className='w-full my-[20px] text-center'>
              We sent a password reset link to your email address. Please check your inbox.
            </p>
            <Button label={"Check Email"} type={'primary'} className='w-full' onClick={()=> setCurrentState('resetPassword')} />
            <p className='w-full mt-[20px] mb-[14px] text-center'>
              Didn’t receive the email? Resend.
            </p>
          </Card>
        );

        case 'resetPassword':
          return (
            <Card>
            <h1>Reset Your Password</h1>
            <p className='w-full mb-[50px] '>
            Enter your new password below to complete the process. Ensure It’s strong and secure
            </p>
            <div className='mb-[33px] flex flex-col gap-[14px]'>
              <label className='' htmlFor="new-password">New Password</label>
              <TextField
                id='new-password'
                variant="outlined"
                placeholder="Enter Your Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={lockIcon} alt="" />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
              <label className='' htmlFor="reset-new-password">Repeat New Password</label>
              <TextField
                id='reset-new-password'
                variant="outlined"
                placeholder="Enter Your Password"
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
            <Button label={"Reset Password"} type={'primary'} className='w-full' onClick={() => {setCurrentState('reset-success')}} />
          </Card>
          );

          case 'reset-success':
        return (
          <Card>
            <div className='flex items-center justify-center'>
              <div className='icon-container mb-[25px]'>
                <img src={successFilled} alt="" />
              </div>
            </div>
            <h1 className='text-center'>Your Password has been successfully reset! </h1>
            <p className='w-full my-[20px] text-center'>
            You can now log in with your new password. If you encounter any issues please contact support.
            </p>
            <Button label={"Back to Login"} type={'primary'} className='w-full' onClick={routeToLogin} />
           
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      {renderCard()}
    </div>
  );
}

export default ForgotPassword