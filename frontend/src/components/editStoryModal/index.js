import { useState } from 'react';
import { Modal } from '../../context/modal';
import EditStory from '../editStory';

const EditStoryModal = (id) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <button className='btn-black' onClick={() => setModalVisible(true)}>Edit Story</button>
            {modalVisible && (
                <Modal onClose={() => setModalVisible(false)}>
                    <EditStory id={id}/>    
                </Modal>
            )}
        </>
    )
}

export default EditStoryModal;