import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/modal';
import EditStory from '../editStory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import * as modals from '../../store/modals';

const EditStoryModal = (id) => {
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modals.modals)

    return (
        <>
            <button className='btn-plain' onClick={() => dispatch(modals.editModalOn(id.id))}><FontAwesomeIcon icon={faPenToSquare} className='icon-main' /></button>
            {modalState?.edit_story && (
                <Modal onClose={() => dispatch(modals.allModalsOff())}>
                    <EditStory />    
                </Modal>
            )}
        </>
    )
};

export default EditStoryModal;