import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './AddEvent.css';

const AddEvent = () => {
    const {handleSubmit, register} = useForm()
    const history = useHistory()
    const onSubmit = data => {
        fetch('http://localhost:4000/addEvent',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            alert('Thank you for adding an event successfully!')
            history.push('/')
        })
    }


    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)} action="/AddEvent" method='post'>
                    <input type="text" name="name"  ref={register({ required: true })} placeholder='Enter title' className="input-field" />
                    <input type="date" name='date' ref={register({ required: true })} className="input-field"/><br/>
                    <input type="text" name='description'  ref={register({ required: true })} id='description' placeholder='Add a description'/>
                    <input type="file" id='file'/>
                    <input className='btn btn-primary' type="submit"/>
                </form>
            </div>
        </>
    );
};

export default AddEvent;