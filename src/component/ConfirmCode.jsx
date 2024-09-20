import "../styles/ConfirmCode.css";

export default function ConfirmCode() {
  return (
    <div className="showModal">
      <div className="formModal">
        <h1>
          📧 Un <b>code de validation</b> vous a été envoyé par <b>email</b>,
          Veuillez vérifier votre boîte de réception, <b>copier</b> ce code,
          puis le coller dans le champ ci-dessous afin de{" "}
          <b>valider votre compte</b>.
        </h1>
        <div className="content">
          <input
            type="text"
            className="w-full pl-3 pr-3 mt-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
          />
          <button className="w-full btnValiderCode mt-2">Valider</button>
        </div>
      </div>
    </div>
  );
}
