import React from 'react'

function UserInfo() {
    const userInfo = {
        id: 1,
        username: 'Lê Bống',
        avatar: 'https://vov2.vov.vn/sites/default/files/styles/large/public/2022-01/lb1.jpg',
        status: true
    }

    // let statusElement;
    // if (userInfo.status) {
    //     statusElement = <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'green' }}></div>
    // } else {
    //     statusElement = <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'red' }}></div>
    // }

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <img style={{ borderRadius: '50%', marginRight: '20px' }} src={userInfo.avatar} width={80} height={80} />
                </div>
                <div>
                    <span style={{ color: '#fff', fontSize: '20px' }}>{userInfo.username}</span>
                </div>
                {/* {userInfo.status ?
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'green' }}></div>
                    : <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'red' }}></div>
                } */}
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: userInfo.status ? 'green' : 'red' }}></div>
            </div>
        </>
    );
}

export default UserInfo