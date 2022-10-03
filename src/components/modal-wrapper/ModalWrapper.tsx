import React, { ReactNode } from "react";

import "./style.scss";

interface Props {
  children: ReactNode;
  closePopup: () => void;
}

export const ModalWrapper = ({ closePopup, children }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    closePopup();
  };
  return (
    <section className="modal-wrapper" onClick={handleClick}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </section>
  );
};
