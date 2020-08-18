import React from 'react';
import classNames from 'classnames';

const Button = ({onClick, className, outline, children}) => {

        return (
            <button className={classNames('button', className, {
                'butto,-outlime': outline,
            })}>
            {children}
            </button>
        );
    }

export default Button;
