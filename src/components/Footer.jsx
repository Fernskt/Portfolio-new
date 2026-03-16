import Redes from "../components/Redes";

export default function Footer() {
  return (
    <div className="footer">
      <div className="parrafo-footer">
        <p className="text-sm text-gray-500">
          Coded in Visual Studio Code by myself. Built with{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Vite</span>, and{" "}
          <span className="font-semibold">Tailwind CSS</span>, deployed with{" "}
          <span className="font-semibold">GitHub Pages</span>.
        </p>
      </div>
      <div className="redes-footer">
        <Redes />
      </div>
    </div>
  );
}
