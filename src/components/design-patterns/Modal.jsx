import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  background: rgb(0, 0, 0, 0.5);
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;
const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;

export const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show modal</button>
      {isOpen && (
        <>
          <ModalBackground onClick={() => setIsOpen(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setIsOpen(false)}>close modal</button>

              {children}
            </ModalBody>
          </ModalBackground>
        </>
      )}
    </>
  );
};
