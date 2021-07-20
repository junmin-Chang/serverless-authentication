import React from 'react'

const Container = ({ children }) => (
    <div stlye={styles.container}>
        {children}
    </div>
)


const styles = {
    container : {
        margin: '0 auto',
        padding: '50px 100px'
    }
}

export default Container