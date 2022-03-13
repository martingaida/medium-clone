import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/modal';
import NewStory from '../newStory';
import * as modals from '../../store/modals';
import './newStoryModal.css';

const NewStoryModal = () => {
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modals.modals);

    return (
        <>
            <button className='btn-black' onClick={() => dispatch(modals.newStoryModalOn())}>New Story</button>
            {modalState?.new_story && (
                <Modal onClose={() => dispatch(modals.allModalsOff())}>
                    <div className='modal-btns'>
                        <NewStory />
                    </div>   
                </Modal>
            )}
        </>
    )
}

export default NewStoryModal;