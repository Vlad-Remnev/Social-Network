import React, {FC, useState} from 'react';

interface IUserMainStatus {
    status: string
}

export const UserMainStatus:FC<IUserMainStatus> = ({status}) => {
    const [editMode, setEditMode] = useState(false)
    return (
        <div>
            {editMode
                ? <input autoFocus value={status} type="text" onBlur={() => setEditMode(false)}/>
                : <span onDoubleClick={() => setEditMode(true)}>{status}</span>
            }
        </div>
    );
};