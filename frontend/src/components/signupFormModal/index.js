import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/modal';
import SignupForm from '../signupForm';
import * as modals from '../../store/modals';

const SignupFormModal = () => {
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modals.modals)
    // const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <button className='btn-black' onClick={() => dispatch(modals.signupModalOn())}>Get started</button>
            {modalState.sign_up && (
                <Modal onClose={() => dispatch(modals.allModalsOff())}>
                    <SignupForm />
                </Modal>
            )}
        </>
    )
}

export default SignupFormModal;