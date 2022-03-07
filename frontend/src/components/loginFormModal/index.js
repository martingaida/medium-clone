import { useState } from 'react';
import { Modal } from '../../context/modal';
import LoginForm from '../loginForm';

const LoginFormModal = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <button onClick={() => setModalVisible(true)}>Log In</button>
            {modalVisible && (
                <Modal onClose={() => setModalVisible(false)}>
                    <LoginForm />
                </Modal>
            )}
        </>
    )
}

export default LoginFormModal;