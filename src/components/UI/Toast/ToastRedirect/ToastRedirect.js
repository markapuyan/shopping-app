import React from 'react';
import './ToastRedirect.scss'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';

const ToastRedirect = props => {
    return (
        <Auxilliary>
            <div>
                {props.children}
            </div>
        </Auxilliary>
    );
};

export default ToastRedirect;