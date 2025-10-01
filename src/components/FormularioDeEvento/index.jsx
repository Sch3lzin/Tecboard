import "./formulario-de-evento.css";

import { TituloFormulario } from "../TituloFormulario";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeformulario } from "../CampoDeformulario";
import { Label } from "../Label";
import { Botao } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento({ temas, aoSubmeter }) {
  function aoFormSubmetido(formData) {
    const evento = {
      capa: formData.get("capa"),
      tema: temas.find(function (item) {
        return item.id == formData.get("Tema");
      }),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("NomeEvento"),
    };
    aoSubmeter(evento);
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeformulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nome"
            placeholder="Summer dev hits"
            name="NomeEvento"
          />
        </CampoDeformulario>
        <CampoDeformulario>
          <Label htmlFor="nomeEvento">
            Qual é o endereço da imagem de capa?
          </Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            placeholder="https://"
            name="capa"
          />
        </CampoDeformulario>
        <CampoDeformulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeformulario>
        <CampoDeformulario>
          <Label htmlFor="dataEvento">Tema do evento</Label>
          <ListaSuspensa id="tema" name="Tema" itens={temas} />
        </CampoDeformulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}
