import { useEffect } from 'react'
import Modal from "react-modal"

const AltModal = ({
    modalIsOpen, 
    toggleModal, 
    children, 
}) => {

    // SIDE EFFECT
    useEffect(()=>{
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'auto';
        }
    }, [])

    return (
        <div className='div-modal'>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
            className="mymodal"
            overlayClassName="modal-overlay"
            closeTimeoutMS={500}
            ariaHideApp={false}>

                {/* modal content */}
                <div className="model-item-cont">

                    {/* children */}
                    <div className='modal-children-container'>
                        {children}
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default AltModal