// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/modal';
import SignupForm from '../signupForm';
import * as modals from '../../store/modals';

const LoginFormModal = () => {
    // const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modals.modals);
    
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