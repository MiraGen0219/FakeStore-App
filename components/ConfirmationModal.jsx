import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmationModal({
    showModal,
    handleCloseModal,
    handleConfirmDelete
}) {

    return (
        <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
            <Modal.Title>Delete Item</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Do you really want to delete this item?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={handleCloseModal}>Cancel </Button>
                <Button variant="danger" onClick={handleConfirmDelete}>Delete Product</Button>
                </Modal.Footer>
        </Modal>
            );
        };

export default ConfirmationModal;