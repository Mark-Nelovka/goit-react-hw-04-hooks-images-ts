import s from "./Modal.module.css";
import { createPortal } from "react-dom";
import React, { useState, useEffect } from "react";
import { modalProps } from "../../Interfaces/interfaces";
const modalRoot = document.querySelector("#modal-root") as HTMLElement;

export default function Modal({ onClose, image, id }: modalProps) {
  const [link, setlink] = useState({
    id: 0,
  largeImageURL: '',
  tags: ''
  });

  useEffect(() => {
    const link = image.find((value) => value.id === id);
    if (link) {
       setlink(link);
    }
   

    window.addEventListener("keydown", handleModal);
    return () => {
      window.removeEventListener("keydown", handleModal);
    };
  }, [id]);

  const handleModal = (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <img className={s.img} src={link.largeImageURL} alt={link.tags} />
    </div>,
    modalRoot
  );
}
