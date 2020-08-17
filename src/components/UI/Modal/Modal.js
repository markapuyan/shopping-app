import React from 'react';
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
import Backdrop from 'components/UI/Backdrop/Backdrop'
import './Modal.scss'
const Modal = React.memo(props => {
    return (
            <Auxilliary>
                <Backdrop visible={props.visible}/>
                <div className="modal-main"
                    style={{
                        transform: props.visible ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.visible ? '1' : '0'
                    }}
                    >
                    {props.children}
                </div>
            </Auxilliary>

    );
});

export default Modal;