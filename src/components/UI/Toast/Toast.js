import React from 'react';
import './Toast.scss'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
import Backdrop from 'components/UI/Backdrop/Backdrop';
const Toast = props => {
    let toastClass = ['toast__main', props.visible ? 'toast__main--show' : 'toast__main--hide'];
    return (
        <Auxilliary>
            <Backdrop 
                close={props.close} 
                visible={props.visible}/>
            <div className={toastClass.join(' ')}>
                {props.children}
            </div>
        </Auxilliary>
    );
};

export default Toast;