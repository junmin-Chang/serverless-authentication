import React from "react";
import Button from './Buttons'
import { styles } from './Form'

function ForgotPasswordSubmit(props) {
    return (
        <div style={styles.container}>
            <input
                name='confirmationCode'
                placeholder='Confirmation Code'
                onChange={e => {e.persist(); props.updateFormState(e)}}
                style={styles.input}
            />
            <input
                name='password'
                placeholder='New Password'
                type='password'
                onChange={e => {e.persist(); props.updateFormState(e)}}
                style={styles.input}
            />
            <Button onClick={props.forgotPasswordSubmit} title='Save New password'/>
        </div>
    )
}

export default ForgotPasswordSubmit