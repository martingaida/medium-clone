import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/modal';
import LoginForm from '../loginForm';
import * as modals from '../../store/modals';
import './loginFormModal.css';

const LoginFormModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    // const dispatch = useDispatch();
    // const modalState = useSelector(state => state.modals.modals)
    // const session = useSelector(state => state.session.user)
    // console.log(modalState)
    return (
        <>
            <button className='btn-plain' onClick={() => setModalVisible(true)}>Sign In</button>
            {modalVisible && (
                <Modal onClose={() => setModalVisible(false)}>
                    <LoginForm />
                </Modal>
            )}
        </>
    )
}

export default LoginFormModal;