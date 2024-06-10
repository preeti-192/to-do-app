"use client"
import ToDoForm from '@/components/ToDoForm';
import UserDetailsTable from '@/components/UserDetailsTable';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

interface UseFormInputs {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}

const ToDoApp = () => {
    const [userDetails, setUserDetails] = useState<UseFormInputs[]>([])
    const [formError, setFormError] = useState<string | null>(null);
    const { reset, handleSubmit, register, formState: { errors }, watch } = useForm<UseFormInputs>();

    const onSubmit = (data: UseFormInputs) => {
        // Check for duplicate email
        const emailExists = userDetails.some(user => user.email === data.email);
        if (emailExists) {
            setFormError('This email is already used.');
            return;
        }
        setUserDetails(prevDetails => [...prevDetails, data])
        reset()
        setFormError(null);
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24 gap-6">
            <ToDoForm onSubmit={onSubmit} handleSubmit={handleSubmit} register={register} errors={errors} watch={watch} />
            {formError && <span className='text-red-600'>{formError}</span>}
            {userDetails.length >= 1 ? <UserDetailsTable userDetails={userDetails} setUserDetails={setUserDetails} /> : ''}
        </div>
    )
}

export default ToDoApp