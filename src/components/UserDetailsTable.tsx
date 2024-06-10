import React, { useState } from 'react'

interface Iprops {
    userDetails: {
        firstName: string
        lastName: string
        email: string
    }[],
    setUserDetails: Function,
}
const UserDetailsTable = (props: Iprops) => {
    const { userDetails, setUserDetails } = props;
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editedUser, setEditedUser] = useState<{ firstName: string; lastName: string; email: string } | null>(null);

    const deleteRow = (index: number) => {
        const updatedUserDetails = userDetails.filter((_, i) => i !== index);
        setUserDetails(updatedUserDetails);
        console.log("first")
    };
    const updateDataHandler = (index: number) => {
        setEditingIndex(index);
        setEditedUser(userDetails[index]);
    };

    console.log(editingIndex, "editingIndex")


    return (
        <div>
            <table className='border'>
                <thead>
                    <tr>
                        <th className='p-4'>First Name</th>
                        <th className='p-4'>Last Name</th>
                        <th className='p-4'>Email</th>
                        <th className='p-4'>Action</th>
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
                                <td className='px-4 py-2 text-center'>
                                    <div className="flex gap-2 justify-center">
                                        <button onClick={() => updateDataHandler(index)} className="border rounded-full px-3 py-2 bg-green-600 hover:bg-transparent transition-all duration-300">Update</button>
                                        <button onClick={() => deleteRow(index)} className="border rounded-full px-3 py-2 bg-red-600 hover:bg-transparent transition-all duration-300">Delete</button>
                                    </div>
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