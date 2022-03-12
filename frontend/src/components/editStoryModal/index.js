import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/modal';
import EditStory from '../editStory';
import * as modals from '../../store/modals';

const EditStoryModal = (id) => {
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modals.modals)

    return (
        <>
            <button className='btn-black' onClick={() => dispatch(modals.editModalOn(id.id))}>Edit Story #{id.id}</button>
            {modalState?.edit && (
                <Modal onClose={() => dispatch(modals.allModalsOff())}>
                    <EditStory />    
                </Modal>
            )}
        </>
    )
};

export default EditStoryModal;