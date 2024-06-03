// import { useEffect, useState } from "react";
// import { createPortal } from "react-dom";
// function Modal({ children, open, className = "" }) {
//   const [modal, setModal] = useState(false);
//   useEffect(() => {
//     if (open) {
//       // dialog.current.showModal();
//       document.getElementById("modalId").style.display = "block";
//     }
//   }, [open]);
//   return createPortal(
//     <dialog className={`modal ${className}`} id="modalId" modal={true}>
//       {children}
//     </dialog>,
//     document.getElementById("modal")
//   );
// }
// export default Modal;

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
function Modal({ children, open, onClose }) {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);
  return createPortal(
    <dialog ref={dialog} onClose={onClose} className="w-100% p-5">
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
export default Modal;
