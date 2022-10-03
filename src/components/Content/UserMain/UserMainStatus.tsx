import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';

interface IUserMainStatus {
    status: string
    updateStatus: (status: string) => void
}

export const UserMainStatus: FC<IUserMainStatus> = ({status, updateStatus}) => {
    const [editMode, setEditMode] = useState(false)
    const [localStatus, setLocalStatus] = useState(status)

    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }

    const handleChangeStatus = () => {
        setEditMode(false)
        updateStatus(localStatus)
    }

    const changeKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            handleChangeStatus()
        }
    }

    return (
        <div>
            {
                editMode
                    ? <input autoFocus value={localStatus} type="text" onBlur={handleChangeStatus}
                             onChange={changeStatus} onKeyDown={changeKeyPress}/>
                    : <span onDoubleClick={() => setEditMode(true)}>{status ? `Status: ${localStatus}` : 'Status: type some text...'}</span>
            }
        </div>
    );
};