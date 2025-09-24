import "./campo-de-formulario.css";

export function CampoDeformulario({ children }) {
  return <fieldset className="campo-form">{children}</fieldset>;
}
