import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/modal';
import EditStory from '../editStory';
import * as modals from '../../store/modals';

const EditStoryModal = (id) => {
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modals.modals)
    // console.log('Modal State: ', modalState.edit)
    return (
        <>
            <button className='btn-black' onClick={() => dispatch(modals.editModalOn())}>Edit Story</button>
            {modalState?.edit && (
                <Modal onClose={() => dispatch(modals.allModalsOff())}>
                    <EditStory id={id} />    
                </Modal>
            )}
        </>
    )
}

export default EditStoryModal;