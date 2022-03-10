import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/modal';
import LoginForm from '../loginForm';
import * as modals from '../../store/modals';
import './loginFormModal.css';

const LoginFormModal = () => {
    // const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modals.modals)
    // const session = useSelector(state => state.session.user)

    return (
        <>
            <button className='btn-plain' onClick={() => dispatch(modals.loginModalOn())}>Sign In</button>
            {modalState?.log_in && (
                <Modal onClose={() => dispatch(modals.allModalsOff())}>
                    <LoginForm />
                </Modal>
            )}
        </>
    )
}

export default LoginFormModal;