import React from 'react'
import ChildrenComponent from './ChildrenComponent'
import ChildrenComponent2 from './ChildrenComponent2'
import ButtonClick from './ButtonClick'

function ParentComponent() {
    return (
        <>
            <div>ParentComponent</div>
            <ChildrenComponent fullName='Nguyễn Văn A' age='17' />
            <ChildrenComponent2 username='Nguyễn Văn B' status={true} />
            <ButtonClick colorBtn='Blue' titleBtn='Nút của parrent' hrefBtn='#' />
        </>
    )
}

export default ParentComponent