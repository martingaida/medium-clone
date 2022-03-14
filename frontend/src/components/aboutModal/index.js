import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../context/modal';
import * as modals from '../../store/modals';
import './aboutModal.css';

const AboutModal = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const modalState = useSelector(state => state.modals.modals);

    const changeRoute = () => {
        history.push('/')
    };

    return (
        <>
            <button className='btn-plain' onClick={() => dispatch(modals.aboutModalOn())}>About</button>
            {modalState?.about && (
                <Modal onClose={() => dispatch(modals.allModalsOff())}>
                    <>
                    <h2>Writing meets AI</h2>
                        <div className='about-modal-content'>
                            <p>Medium inspired React project by Martin Gaida utilizing GPT-3 neural network in order to allow users to get a glimpse of what's possible with modern day technology.</p>
                            <div className='footer-text'>
                                <p>JavaScript | React | Node.js | Express | SQL | HTML5 | CSS | Git | GPT-3</p>
                            </div>
                        </div>
                    </>
                </Modal>
            )}
        </>
    )
};

export default AboutModal;