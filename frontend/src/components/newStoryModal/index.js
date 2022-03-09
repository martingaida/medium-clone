import { useState } from 'react';
import { Modal } from '../../context/modal';
import NewStory from '../newStory';
import './newStoryModal.css';

const NewStoryModal = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <button className='btn-black' onClick={() => setModalVisible(true)}>New Story</button>
            {modalVisible && (
                <Modal onClose={() => setModalVisible(false)}>
                    <NewStory />    
                </Modal>
            )}
        </>
    )
}

export default NewStoryModal;