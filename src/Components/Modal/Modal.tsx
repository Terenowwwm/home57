import React from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}
const Modal:React.FC<ModalProps>  = ({show, onClose}) => {
  return (
    <>
      <div className="modal-backdrop show" style={{display: show ? "block" : "none"}}>
      </div>
        <div className="modal show" style={{display: show ? "block" : "none"}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header d-flex align-items-center justify-content-between">
                <h1 className="modal-title fs-5">Информация</h1>
                <button className="btn btn-primary" onClick={onClose}>Закрыть</button>
              </div>
              <div className="modal-body opacity-100">
                <p>1.Введите полное имя для дальнейшей идентификации</p>
                <p>2.Введите email на которую придет код активации</p>
                <p>3.Отметьте активность пользователя</p>
                <p>4.Выберит роль для управления дополнительными функциями</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Modal;