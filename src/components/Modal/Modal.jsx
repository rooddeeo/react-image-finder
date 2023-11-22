import { createPortal } from 'react-dom';
import { Component } from 'react';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  backdropCloseModal = event => {
    console.log(event.target);
    console.log(event.currentTarget);
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImage, tags } = this.props;
    return createPortal(
      <div className={css.overlay} onClick={this.backdropCloseModal}>
        <div className={css.modal}>
          <img src={largeImage} width="800" height="600" alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
