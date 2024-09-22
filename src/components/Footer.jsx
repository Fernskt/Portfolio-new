import React from "react";
import Redes from "../components/Redes";

export default function Footer() {
  return (
    <div className="footer">
      <div className="parrafo-footer">
        <p class="text-sm text-gray-500">
          Coded in Visual Studio Code by myself. Built with{" "}
          <span class="font-semibold">React</span>,{" "}
          <span class="font-semibold">Vite</span>, and{" "}
          <span class="font-semibold">Tailwind CSS</span>, deployed with{" "}
          <span class="font-semibold">GitHub Pages</span>.
        </p>
      </div>
      <div className="redes-footer">
        <Redes></Redes>
      </div>
    </div>
  );
}
