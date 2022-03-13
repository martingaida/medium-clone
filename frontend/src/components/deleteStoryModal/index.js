import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { Modal } from '../../context/modal';
import * as modals from '../../store/modals';
import { deleteStory } from '../../store/stories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import './deleteStoryModal.css';

const DeleteStoryModal = (storyId) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const modalState = useSelector(state => state.modals.modals);

    const changeRoute = () => {
        history.push('/')
    };

    return (
        <>
            <button className='btn-plain' onClick={() => dispatch(modals.deleteStoryModalOn())}><FontAwesomeIcon icon={faTrash} className='icon-main' /></button>
            {modalState?.delete_story && (
                <Modal onClose={() => dispatch(modals.allModalsOff())}>
                    <h1>Are you sure?</h1>
                    <button className='btn-plain' onClick={() => {dispatch(deleteStory(storyId.storyId)); dispatch(modals.allModalsOff())}}>Delete</button>
                    <button className='btn-black' onClick={() => dispatch(modals.allModalsOff())}>Cancel</button> 
                </Modal>
            )}
        </>
    )
};

export default DeleteStoryModal;