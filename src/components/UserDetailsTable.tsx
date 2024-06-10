import React from 'react'

interface Iprops {
    userDetails: {
        firstName: string
        lastName: string
        email: string
    }[]
}
const UserDetailsTable = (props: Iprops) => {
    const { userDetails } = props
    return (
        <div>
            <table className='border w-[600px]'>
                <thead>
                    <tr>
                        <th className='p-4'>First Name</th>
                        <th className='p-4'>Last Name</th>
                        <th className='p-4'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userDetails.map((obj, index) => {
                        return (
                            <tr key={index} className='border'>
                                <td className='px-4 py-2 text-center'>
                                    {obj.firstName}
                                </td>
                                <td className='px-4 py-2 text-center'>
                                    {obj.lastName}
                                </td>
                                <td className='px-4 py-2 text-center'>
                                    {obj.email}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserDetailsTable