"use client"
import React, { useState } from 'react'
import { FieldErrors } from 'react-hook-form'
import CustomInput from './common/CustomInput'

interface UseFormInputs {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}
interface IProps {
    onSubmit: (data: UseFormInputs) => void
    handleSubmit: Function
    register: Function
    errors: FieldErrors<UseFormInputs>
    watch: Function
}

const ToDoForm = (props: IProps) => {
    const { onSubmit, handleSubmit, register, errors, watch } = props
    const [isPasswordShow, setIsPasswordShow] = useState(false)
    const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(false)

    return (
        <div className='px-8 py-10 border rounded-3xl bg-black/50 backdrop:blur-lg max-w-[600px] w-full relative'>
            <p className='text-[90px] absolute -start-14 -top-20 -rotate-12'>😎</p>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                <CustomInput register={{ ...register('firstName', { required: 'First Name is required' }) }} error={errors.firstName} placeholder="First Name" type="text" />
                <CustomInput register={{ ...register('lastName', { required: 'Last Name is required' }) }} error={errors.lastName} placeholder="Last Name" type="text" />
                <CustomInput register={{
                    ...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Please enter a valid email 😬',
                        },
                    })
                }} error={errors.email} placeholder="Email" type="email" />
                {/* inputs for password and confirm password */}
                <div className='flex gap-3 w-full'>
                    <div className='w-full relative'>
                        <CustomInput register={{
                            ...register('password', {
                                required: 'Password is required', minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long!"
                                }
                            })
                        }} type={isPasswordShow ? 'text' : 'password'} placeholder='Password' error={errors.password} />
                        {/* toggle show and hide password */}
                        <p onClick={() => setIsPasswordShow(!isPasswordShow)} className='cursor-pointer text-2xl absolute end-0 top-0 mt-2 me-2'>{isPasswordShow ? '🫣' : '🤫'}</p>
                    </div>
                    <div className='w-full relative'>
                        <CustomInput register={{
                            ...register("confirmPassword", {
                                required: 'Confirm Password is required',
                                validate: (val: string) => {
                                    if (watch('password') != val) {
                                        return "Your passwords do no match 🥴";
                                    }
                                },
                            })
                        }} type={isConfirmPasswordShow ? 'text' : 'password'} placeholder='Confirm Password' error={errors.confirmPassword} />
                        {/* toggle show and hide password */}
                        <p onClick={() => setIsConfirmPasswordShow(!isConfirmPasswordShow)} className='cursor-pointer text-2xl absolute end-0 top-0 mt-2 me-2'>{isConfirmPasswordShow ? '🫣' : '🤫'}</p>
                    </div>
                </div>
                <button type="submit" className='w-full border p-2 rounded-full text-black bg-white font-semibold hover:text-white hover:bg-transparent transition-all duration-300 text-xl'>Submit</button>
            </form>
        </div>

    )
}

export default ToDoForm