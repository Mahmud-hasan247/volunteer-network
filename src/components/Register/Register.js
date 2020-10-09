import React, { useContext } from 'react';
import './Register.css';
import logo from '../../../src/images/logo.png';
import { userContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Register = () => {

  const { handleSubmit, register } = useForm();

  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(userContext)

  const onSubmit = data => {
    const volunteerInfo = { ...loggedInUser, about: data }

    fetch('https://polar-sierra-60369.herokuapp.com/newRegister', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(volunteerInfo)
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          alert('You have registered successfully!')
        }
        history.push(`/myEvents/${loggedInUser.email}`);
      })
  }

  const { name } = useParams();

  return (
    <>
      <div className="registerForm">
        <img id='registerLogo' src={logo} alt="" />
        <form action="/newRegister" method="post" onSubmit={handleSubmit(onSubmit)} id="registerForm">
          <h4 className='text-center registerInput'>Register as a volunteer</h4>
          <input className='registerInput' type="text" defaultValue={loggedInUser.name} placeholder='Your name' name='name' ref={register({ required: true })} /><br />
          <input className='registerInput' type="text" defaultValue={loggedInUser.email} placeholder='Email or username' name='email' ref={register({ required: true })} /><br />
          <input className='registerInput' name='date' ref={register({ required: true })} type="date" /><br />
          <input className='registerInput' type="text" placeholder='Description' name='description' ref={register({ required: true })} /><br />
          <input className='registerInput' type="text" placeholder='Event' defaultValue={name} ref={register({ required: true })} name='event' /><br />
          <input className='registerInput btn btn-primary' type="submit" value="Register" />
        </form>
      </div>
    </>
  );
};

export default Register;