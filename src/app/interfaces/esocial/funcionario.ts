export interface Funcionario{
    cod_empregado: number;
    data_admissao: any;
    data_transmissao: any;
    nome_empregado: string;
    situacao: string;
    situacao_empregado: number;
    admissao_mes: number;
    admissao_ano: number;
    transmissao_mes: number;
    transmissao_ano: number;
    evento_esocial: string;
    status_validado_inicio: string;
    status_validado_fim: string;
    inicio_situacao: string;
    fim_situacao: string;
    ambos_validados: string;
    data_evento: any;
    status_validado: any;
    tipo_evento: any;
    ativo?: boolean
    motivo?: string;
  }
  