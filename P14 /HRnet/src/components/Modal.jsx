

import PropTypes from 'prop-types';

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="modal-close" onClick={closeModal}>
          &times;
        </span>
        <h2>Employee Created</h2>
      </div>
    </div>
  );
};

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
  };

export default Modal;
