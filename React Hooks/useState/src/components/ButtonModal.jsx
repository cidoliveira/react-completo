import React, { useState } from "react";

export default function ButtonModal() {
  let [modal, setModal] = useState(false);

  return (
    <button onClick={() => setModal(!modal)}>
      {modal ? "Modal Aberto!" : "Modal Fechado."}
    </button>
  );
}
