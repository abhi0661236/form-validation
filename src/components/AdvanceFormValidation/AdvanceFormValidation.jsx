import React from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames'

const AdvanceFormValidation = () => {
    const { register,formState:{errors}, handleSubmit } = useForm({
        mode: "onTouched" // validation happens at onChange event. default value is onSubmit. possible values are -- all, onBlur, onTouched, onChange, onSubmit.
    });
    console.log(errors);
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <form className='w-75 m-auto p-5' onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">Full Name :</label>
                <input
                    className={classNames('form-control',{"is-invalid": errors.fullName})}
                    {...register("fullName",{
                        required: {
                            value: true,
                            message: "Full name cannot be empty",
                        },
                        minLength: {
                            value: 4,
                            message: "Full name cannot be less than 4 characters."
                        }
                    })}
                />
                {errors.fullName && (<div className='invalid-feedback'>{errors.fullName.message}</div>)}
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email Address :</label>
                <input
                    className={classNames('form-control',{
                        "is-invalid": errors.email
                    })}
                    {...register("email",{
                        required: {
                            value: true,
                            message: "Email cannot be empty."
                        },
                        pattern:{
                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Please enter a valid email address."
                        }
                    })}
                />

                {errors.email && (<div className='invalid-feedback'>{errors.email.message}</div>)}
            </div>
            <div className="form-group mb-3">
                <label htmlFor="phone" className="form-label">Phone Number :</label>
                <input
                    className={classNames('form-control',{
                        "is-invalid": errors.phone
                    })}
                    {...register("phone",{
                        required: {
                            value: true,
                            message: "Phone cannot be empty."
                        },
                        minLength:{
                            value: 10,
                            message: "Please enter a valid 10 digit number",
                        },
                        maxLength:{
                            value: 10,
                            message: "Please enter a valid 10 digit number",
                        }
                    })}
                />
                {errors.phone && (<div className='invalid-feedback'>{errors.phone.message}</div>)}
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input
                    className={classNames('form-control', {
                        "is-invalid": errors.password
                    })}
                    {...register("password",{
                        required: {
                            value: true,
                            message: "Password cannot be empty."
                        },
                        minLength:{
                            value: 8,
                            message: "Password should be atleast 8 characters long."
                        }
                    })}
                />
                {
                    errors.password && (
                        <div className='invalid-feedback'>
                            {errors.password.message}
                        </div>
                    )
                }
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Choose your state :</label>
                <select className={classNames('form-select', {
                    "is-invalid": errors.state
                })} 
                {...register('state',{
                        required:{
                            value: true,
                            message: "Please select a state."
                        }
                    })}>
                    <option value="">Select State...</option>
                    <option value="uttarpradesh">Uttar Pradesh</option>
                    <option value="delhi">Delhi</option>
                    <option value="punjab">Punjab</option>
                </select>

                {errors.state && (
                    <div className='invalid-feedback'>
                        {errors.state.message}
                    </div>
                )}
            </div>
            <div className="form-group mb-3 d-flex multi-inputs">
                <label htmlFor="password" className="form-label">Choose your gender :</label>
                <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="male" value="male" {...register('gender',{
                        required: true,
                    })} />
                        <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="female" id="inlineRadio2" value="female" {...register('gender',{
                        required: true,
                    })} />
                        <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="other" id="inlineRadio3" value="other" {...register('gender',{
                        required: true,
                    })} />
                        <label className="form-check-label" htmlFor="other">Other</label>
                    </div>
                </div>
            </div>
            <div className='mb-3 d-flex multi-inputs'>
                <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="video" {...register('agree_terms_conditions',{
                        required: true,
                    })} />
                        <label className="form-check-label" htmlFor="video">I agree all terms & conditions.</label>
                    </div>
                </div>
            </div>
            <input className='btn btn-primary' type="submit" />
        </form>
    )
}

export default AdvanceFormValidation