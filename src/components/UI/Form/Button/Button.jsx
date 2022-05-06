import React from 'react';

import classes from './Button.module.css'

const Button = ({submit, text = 'войти', isStageRun}) => {
    return (
        <div data-testid={'button-login'} className={[classes.submitButton, isStageRun ? classes.isRun : ''].join(' ')}>
            <button type={'submit'} onClick={submit}>
                {text}
            </button>
        </div>
    );
};

export default Button;