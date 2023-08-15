export interface EsocialCom {
  codigo_empresa: number;
  razao_social: string;
  tipo_incricao: any;
  cnpj: any;
  situacao_empresa: any;
  motivo_inativacao: any;
  verifica_cnpj_matriz: any;
  data_incricao_junta: any;
  data_cadastramento: any;
  faseamento?: any;
  data_periodicos: any;
  verifica_movimento: any;
  filtra_3_grupo_fase?: any;
  codigo_evento: any;
  competencia: any;
  data_envio: any;
  nome_sistema?: any;
  num_recibo: any;
  id_resposta: any;
  responsavel?: any;
  faseamento_grupo?: number,
  verifica_movimento_mes_anterior?: number,
  tipo_processamento_mov?: number,
  verifica_situacao_empresa?: number,
  codigo_empresa_esocial?: any,
  tipo_processo?: any,
  data_criacao?: any,
  nome_dia_semana?: null,
  data_envio_feriado_final_semana?: null,
  advertencia_ajustada?: null,
  v1?: number,
  v2?: number,
  filtro_empresas_grupo_3?: number,
  filtro_empresa_faseamento_grupo_3?: number,
  todas_empresas_faseamento?: number,
  todas_empresas_faseamento_um_dois?: number,
  verifica_faseamento?: number,
  movimento_atual?: number,
  movimento_anterior?: number,
  verifica_movimento_1?: number,
  verifica_movimento_2?: number,
  verifica_movimento_3?: number,
  verifica_movimento_final?: number,
  id_colaborador_rh?: number,
  id_orientador?: number,
  id_coordenador?: number,
  nome_colaborador_rh?: string,
  coordenador?: string,
  email_coordenador?: string,
  email_pessoa_rh?: string,
  status_final?: string
}

export const EmpresasData: EsocialCom[] = [
  {
    codigo_empresa: 25,
    razao_social: 'BM VIAGENS E TURISMO LTDA',
    tipo_incricao: 'CNPJ',
    cnpj: '00418361000152',
    situacao_empresa: 'A',
    motivo_inativacao: 1,
    verifica_cnpj_matriz: 1,
    data_incricao_junta: '1995-02-06',
    data_cadastramento: '2007-11-01',
    faseamento_grupo: 3,
    data_periodicos: '2021-05-01',
    verifica_movimento: 1,
    verifica_movimento_mes_anterior: 1,
    tipo_processamento_mov: 1,
    verifica_situacao_empresa: 1,
    codigo_empresa_esocial: null,
    codigo_evento: null,
    competencia: null,
    tipo_processo: null,
    data_criacao: null,
    data_envio: null,
    nome_dia_semana: null,
    data_envio_feriado_final_semana: null,
    num_recibo: null,
    id_resposta: null,
    advertencia_ajustada: null,
    v1: 0,
    v2: 0,
    filtro_empresas_grupo_3: 0,
    filtro_empresa_faseamento_grupo_3: 0,
    todas_empresas_faseamento: 2,
    todas_empresas_faseamento_um_dois: 0,
    verifica_faseamento: 2,
    movimento_atual: 1,
    movimento_anterior: 1,
    verifica_movimento_1: 1,
    verifica_movimento_2: 0,
    verifica_movimento_3: 0,
    verifica_movimento_final: 1,
    id_colaborador_rh: 294,
    id_orientador: 615,
    id_coordenador: 371,
    nome_colaborador_rh: 'Eloa Arnold',
    coordenador: 'Alexandra Borges',
    email_coordenador: 'alexandra.borges@cgcontadores.com.br',
    email_pessoa_rh: 'eloa.arnold@cgcontadores.com.br',
    status_final: 'Não transmitido'
  },
  {
    codigo_empresa: 26,
    razao_social: 'S7 STUDY VIAGENS E TURISMO LTDA',
    tipo_incricao: 'CNPJ',
    cnpj: '05241051000129',
    situacao_empresa: 'A',
    motivo_inativacao: 1,
    verifica_cnpj_matriz: 1,
    data_incricao_junta: '2002-08-08',
    data_cadastramento: '2002-08-08',
    faseamento_grupo: 3,
    data_periodicos: '2021-05-01',
    verifica_movimento: 1,
    verifica_movimento_mes_anterior: 1,
    tipo_processamento_mov: 1,
    verifica_situacao_empresa: 1,
    codigo_empresa_esocial: null,
    codigo_evento: null,
    competencia: null,
    tipo_processo: null,
    data_criacao: null,
    data_envio: null,
    nome_dia_semana: null,
    data_envio_feriado_final_semana: null,
    num_recibo: null,
    id_resposta: null,
    advertencia_ajustada: null,
    v1: 0,
    v2: 0,
    filtro_empresas_grupo_3: 0,
    filtro_empresa_faseamento_grupo_3: 0,
    todas_empresas_faseamento: 2,
    todas_empresas_faseamento_um_dois: 0,
    verifica_faseamento: 2,
    movimento_atual: 1,
    movimento_anterior: 1,
    verifica_movimento_1: 1,
    verifica_movimento_2: 0,
    verifica_movimento_3: 0,
    verifica_movimento_final: 1,
    id_colaborador_rh: 884,
    id_orientador: 615,
    id_coordenador: 371,
    nome_colaborador_rh: 'Fabiano Luz',
    coordenador: 'Alexandra Borges',
    email_coordenador: 'alexandra.borges@cgcontadores.com.br',
    email_pessoa_rh: 'fabiano.luz@cgcontadores.com.br',
    status_final: 'Não transmitido'
  },
]