import React from 'react';
import { useForm } from 'react-hook-form';
import '../../App.css';

function BasicForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form className='w-50 m-auto p-5' onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name :</label>
                <input type="text" className="form-control" id="name" {...register('fullname')} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" {...register('email')} />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number :</label>
                <input type="tel" className="form-control" id="phone" {...register('phone')} /> {/* If we want to add multiple phone numbers in an object we will have to write phone[0] and so on....
        And if we want to add multiple phone numbers in a phone object, we can use phone.first and so on. we specify the keys of the phone object.
        */}
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" {...register('password')} />
            </div>

            <div className='mb-3 d-flex multi-inputs' >
                <label>Gender :</label>
                <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="male" value="male" {...register('gender')} />
                        <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="female" id="inlineRadio2" value="female" {...register('gender')} />
                        <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="other" id="inlineRadio3" value="other" {...register('gender')} />
                        <label className="form-check-label" htmlFor="other">Other</label>
                    </div>
                </div>
            </div>

            <div className='mb-3 d-flex multi-inputs'>
                <label>Hobbies :</label>
                <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="video" value="video" {...register('hobbies[0]')} />
                        <label className="form-check-label" htmlFor="video">Video Games</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="travelling" value="travelling" {...register('hobbies[1]')} />
                        <label className="form-check-label" htmlFor="travelling">Travelling</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="readingnovels" value="readingnovels" {...register('hobbies[2]')} />
                        <label className="form-check-label" htmlFor="readingnovels">Reading Novels</label>
                    </div>
                </div>
            </div>

            <div className='mb-3 d-flex multi-inputs' >
                <label>State :</label>
                <div>
                    <select className="form-select form-select-sm" {...register('state')}>
                        <option value="">Choose your state</option>
                        <option value="uttarpradesh">Uttar Pradesh</option>
                        <option value="delhi">Delhi</option>
                        <option value="bihar">bihar</option>
                        <option value="rajasthan">rajasthan</option>
                        <option value="madhyapradesh">Madhya Pradesh</option>
                    </select>
                </div>
            </div>

            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    )
}

export default BasicForm