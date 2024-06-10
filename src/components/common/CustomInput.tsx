import React from 'react'
import { FieldErrors } from 'react-hook-form'

interface UseFormInputs {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}

interface IProps {
    register: any
    error: any
    placeholder:string
    type:string
}

const CustomInput = (props: IProps) => {
    const { register, error,placeholder,type } = props

    return (
        <div>
            <input type={type} {...register} placeholder={placeholder} className='bg-slate-950 border rounded-xl text-white p-3 w-full' />
            {error && <p className='text-red-500'>{error.message}</p>}
        </div>
    )
}

export default CustomInput