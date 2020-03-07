import React from 'react';
import { useForm } from 'react-hook-form';
import './Detail.scss';

export default function Detail({...props}) {
  const { user, updateContact } = props;
  const { register, handleSubmit, errors} = useForm();
  const onSubmit = data => {
    const reqBody = {
      id: user.id,
      ...data
    }
    updateContact(reqBody);
  }
  return (
    <div className="detail">
      <div className="title">{user.firstName} {user.lastName}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" ref={register({ required: true})} defaultValue={user.firstName}/>
        {errors.firstName && 'first name is required.'}
        
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" ref={register({ required: true})} defaultValue={user.lastName}/>
        {errors.lastName && 'last name is required.'}

        <label htmlFor="address">Address</label>
        <input name="address" ref={register({ required: true})} defaultValue={user.address}/>
        {errors.address && 'address is required.'}

        <label htmlFor="city">City</label>
        <input name="city" ref={register({ required: true})} defaultValue={user.city}/>
        {errors.city && 'city is required.'}

        <label htmlFor="country">Country</label>
        <input name="country" ref={register({ required: true})} defaultValue={user.country}/>
        {errors.country && 'Country is required.'}

        <label htmlFor="phone">Phone</label>
        <input name="phone" ref={register({ required: true})} defaultValue={user.phone}/>
        {errors.phone && 'Phone is required.'}

        <label htmlFor="email">Email</label>
        <input name="email" ref={register({ required: true})} defaultValue={user.email}/>
        {errors.email && 'Email is required.'}

        <input className="btn" type="submit" />
      </form>
    </div>
  )

}
