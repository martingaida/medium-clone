import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/modal';
import * as modals from '../../store/modals';
import { deleteComment } from '../../store/comments';
import './deleteCommentModal.css';

const DeleteCommentModal = (commentId) => {
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modals.modals);

    return (
        <>
            <button className='btn-plain' onClick={() => dispatch(modals.deleteModalOn())}>Delete</button>
            {modalState?.delete && (
                <Modal onClose={() => dispatch(modals.allModalsOff())}>
                    <h1>Are you sure?</h1>
                    <button className='btn-plain' onClick={() => dispatch(deleteComment(commentId.commentId))}>Yes</button>
                    <button className='btn-black' onClick={() => dispatch(modals.allModalsOff())}>No</button> 
                </Modal>
            )}
        </>
    )
}

export default DeleteCommentModal;