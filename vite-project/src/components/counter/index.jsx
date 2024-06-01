import { useEffect, useState } from "react";

function Counter() {
  /**
   * Parameter kedua (array):
   * - Digunakan untuk custom lifecycle update.
   * - Lifecycle update dijalankan ketika state di array berubah.
  */
 function addAngka () {
   setAngka(angka + 1);
 }
 function manipulateDOM() {
    console.log("Lifecycle: Component dimount");
    document.title = `Result: ${angka}`;

  }

  const [angka, setAngka] = useState(0);

  useEffect (manipulateDOM, [angka]);

  console.log("Lifecycle: Component dirender");


  return (
    <div>
      <p>Result: {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;
