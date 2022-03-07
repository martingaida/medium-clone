import { useState } from 'react';
import { Modal } from '../../context/modal';
import LoginForm from '../loginForm';
import './loginFormModal.css';

const LoginFormModal = () => {
    const [modalVisible, setModalVisible] = useState(false);

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