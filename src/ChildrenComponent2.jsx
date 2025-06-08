import React from 'react'

function ChildrenComponent2({username, status}) {
    return (
        <>
            <h1>Username: {username}</h1>
            <h1>Trạng thái: {status ? 'active' : 'inactive'}</h1>
        </>
    )
}

export default ChildrenComponent2