import classes from './Modal.module.css';

function Modal({ children, onClose }) {
  // childrenはreserved propsで、<Modal>の中身を指す
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
