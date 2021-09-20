import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export function Modal({ url, closeModal }) {
  useEffect(() => {
    window.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        this.props.closeModal();
      }
    });
  });

  return (
    <div
      onClick={evt => {
        if (evt.target.nodeName === 'IMG') {
          return;
        }

        closeModal();
      }}
      className={s.overlay}
    >
      <div className={s.modal}>
        <img src={url} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  url: PropTypes.string,
};
