import { useState } from 'react';
import { Modal } from '../../context/modal';
import SignupForm from '../signupForm';

const LoginFormModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <>
            <button className='btn-black' onClick={() => setModalVisible(true)}>Get started</button>
            {modalVisible && (
                <Modal onClose={() => setModalVisible(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    )
}

export default LoginFormModal;