import React from 'react';
import './Toast.scss'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
import Backdrop from 'components/UI/Backdrop/Backdrop';
const Toast = props => {
    return (
        <Auxilliary>
            <Backdrop visible={props.visible}/>
            <div className="toast__main" style={{
                transform: props.visible ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.visible ? '1' : '0'
            }}>
                {props.children}
            </div>
        </Auxilliary>

    );
};

export default Toast;