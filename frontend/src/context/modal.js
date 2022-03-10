import { useContext, createContext, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

export const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modalRef.current);
    },[])
    
    return(
        <>
            <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef}/>
        </>
    );
}

export const Modal = ({ onClose, children }) => {
    const modalNode = useContext(ModalContext);

    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div className='modal'>
            <div className='modal-background' onClick={onClose}/>
            <div className='modal-content'>
                {children}
            </div>
        </div>,
        modalNode
    )
}