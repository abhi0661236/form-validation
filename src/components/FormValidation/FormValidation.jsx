import React from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames'

const FormValidation = () => {
    const { register,formState:{errors}, handleSubmit } = useForm();
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
                    className='form-control'
                    {...register("email",{
                        required: true,
                    })}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="phone" className="form-label">Phone Number :</label>
                <input
                    className='form-control'
                    {...register("phone",{
                        required: true,
                    })}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input
                    className='form-control'
                    {...register("password",{
                        required: true,
                    })}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Choose your state :</label>
                <select className="form-select" {...register('state',{
                        required: true,
                    })}>
                    <option value="">Select State...</option>
                    <option value="uttarpradesh">Uttar Pradesh</option>
                    <option value="delhi">Delhi</option>
                    <option value="punjab">Punjab</option>
                </select>
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

export default FormValidation