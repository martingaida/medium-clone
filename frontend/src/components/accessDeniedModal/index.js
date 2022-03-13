import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../context/modal';
import LoginFormModal from '../loginFormModal';
import SignupFormModal from '../signupFormModal';
import * as modals from '../../store/modals';
import './accessDeniedModal.css';

const AccessDeniedModal = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const modalState = useSelector(state => state.modals.modals);

    const changeRoute = () => {
        history.push('/')
    };

    return (
        <>
            {modalState?.access_denied && (
                <Modal onClose={() => dispatch(modals.allModalsOff())}>
                    <h2>Only registered users can access this content.</h2>
                    <div className='modal-btns'>
                        <LoginFormModal />
                        <SignupFormModal />
                    </div>
                </Modal>
            )}
        </>
    )
};

export default AccessDeniedModal;