import React from "react";
import Button from './Buttons'
import { styles } from './Form'

function ForgotPassword(props) {
    return (
        <div style={styles.container}>
            <input
                name='username'
                placeholder='username'
                onChange={e => {e.persist(); props.updateFormState(e)}}
                style={styles.input}
            />
            <Button onClick={props.forgotPassword} title="Reset password"/>
        </div>
    )
}

export default ForgotPassword