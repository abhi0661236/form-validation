import React from 'react';
import {useForm} from 'react-hook-form';

const DynamicForm = () => {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data)=>{
    console.log(data);
  }
  return (
    <form className="w-50 m-auto p-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mb-3">
        <label htmlFor="name" className="form-label">Name :</label>
        <input className='form-control'  {...register("firstName", { required: true, maxLength: 20 })} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="lastname" className="form-label">Email :</label>
        <input className='form-control' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="age" className="form-label">Age :</label>
        <input className='form-control' type="number" {...register("age", { min: 18, max: 99 })} />
      </div>
      <input className='btn btn-primary' type="submit" />
    </form>
  )
}

export default DynamicForm