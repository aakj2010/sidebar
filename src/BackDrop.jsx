import React from 'react'

function BackDrop({ sideBar, closeSideBar }) {
    return (
        <div className={sideBar ? 'backdrop backdrop--open' : 'backdrop'} onClick={closeSideBar}></div>
    )
}

export default BackDrop