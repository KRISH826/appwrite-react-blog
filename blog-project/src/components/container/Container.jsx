import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='container w-full max-w-'>
            {children}
        </div>
    )
}

export default Container
