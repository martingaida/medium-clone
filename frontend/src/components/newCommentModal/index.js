import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/modal';
import NewComment from '../newComment';
import * as modals from '../../store/modals';
import './newCommentModal.css';

const NewCommentModal = (storyId) => {
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modals.modals);

    return (
        <>
            <button className='btn-black' onClick={() => dispatch(modals.newCommentModalOn())}>New Comment</button>
            {modalState?.comment_new && (
                <Modal onClose={() => dispatch(modals.allModalsOff())}>
                    <NewComment storyId={storyId}/>    
                </Modal>
            )}
        </>
    )
}

export default NewCommentModal;