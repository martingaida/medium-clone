import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/modal';
import NewComment from '../newComment';
import EditComment from '../editComment';
import * as modals from '../../store/modals';
import './editCommentModal.css';

const EditCommentModal = (commentId) => {
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modals.modals);

    return (
        <>
            <button className='btn-black' onClick={() => dispatch(modals.editCommentModalOn(commentId))}>Edit Comment</button>
            {modalState?.comment_edit && (
                <Modal onClose={() => dispatch(modals.allModalsOff())}>
                    <EditComment />    
                </Modal>
            )}
        </>
    )
}

export default EditCommentModal;