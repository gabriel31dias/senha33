import { Funcionario } from "./funcionario";

export interface Admissoes {
    cnpj: String;
    id_empresa: number;
    funcionarios: Funcionario[];
    possui_pendencia: Boolean;
    possui_transferido: Boolean;
    possui_validado: Boolean;
    possui_validado_em_atraso: boolean;
    razao_social: String;
    status: String;
    codigo_empresa: number;
    evento_esocial: number;
    responsavel: String;
    id_responsavel: number;
    coordenador: String;
    id_coordenador: number;
    id_colaborador: number;
    percent_concluido: number;
  }
  