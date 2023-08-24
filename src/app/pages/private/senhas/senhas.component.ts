/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { Essocial } from '../../../services/essocial/essocial.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Usuarios } from 'src/app/services/essocial/usuarios.service';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
import { TitleService } from 'src/app/services/title.service';

interface Code {
  code: string;
}

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-senhas',
  templateUrl: './senhas.component.html',
  styleUrls: ['./senhas.component.css'],
  providers: [MessageService],
})
export class SenhasComponent implements OnInit {
  currenpage: any;
  competencias: any;
  idsetor: any;
  last = 0;
  currentlast = 0;
  idresponsavel = 1;
  counttotaldata = 1000;
  semdados = false;
  currentDate: any;
  dataListagem: any;
  loading: boolean = false;
  showFilters: boolean;
  totalEmpresas: number;
  totalTrabalhadores: number;
  filters: any = [];
  statusEmpresas: any = [];
  valorProgresso: number = 1;
  usuariosExecutoresRh: any = [];
  filterEmpresa: any = [];
  usuariosCordenadoresRh: any = [];
  respSelecionado: any = [];
  subFilters: any = [];
  searchComp: string = '';
  cordSelecionado: any = [];
  @ViewChild('dt') dt: any;
  @ViewChild('dtchild') dtchild: any;
  backupData: any = [];
  competenciaAtual: string = '';
  mesAtualLabel: string = '';
  porcentagemTotal: any;
  visibleTable: boolean;
  empSelecionada: any = [];
  codString: any = '';

  status: any;

  selectedValues: string[] = [];

  cities!: City[];

  selectedCities!: City[];

  consultoriaModo: string;
  optionsInfoEmpresa: string;

  acesso!: string;

  constructor(
    private essocialService: Essocial,
    private datePipe: DatePipe,
    private usuariosService: Usuarios,
    private sharedTitleService: TitleService
  ) {
    this.showFilters = false;
    this.totalEmpresas = 0;
    this.porcentagemTotal = 0;
    this.consultoriaModo = '';
    this.optionsInfoEmpresa = '';

    this.respSelecionado = [];
    this.totalTrabalhadores = 0;

    this.visibleTable = true;

    this.statusEmpresas = [
      { label: 'Status', value: '' },
      { label: 'Transmitido', value: 'Transmitido' },
      { label: 'Transmitido em atraso', value: 'Transmitido em atraso' },
      { label: 'Não transmitido', value: 'Não transmitido' },
    ];
  }

  changeModoConsultoria(typeModo: string) {
    this.consultoriaModo = typeModo;
  }

  changeOptionInfoEmpresa(optionModo: string) {
    this.optionsInfoEmpresa = optionModo;
  }

  formatarData(data: any): any {
    return this.datePipe.transform(data, 'dd-MM-yyyy');
  }

  obterDataAtual(number?: number, ano?: number) {
    const meses = [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ];

    const dataAtual = new Date();
    if (number) {
      number = number - 1;
    }

    const mesAtual = meses[number ?? dataAtual.getMonth()];
    const anoAtual = ano ?? dataAtual.getFullYear();

    this.mesAtualLabel = mesAtual + '/' + anoAtual;
    return mesAtual + '/' + anoAtual;
  }

  codes!: Code[];

  selectedCodes!: Code[];

  cars = [
    { label: 'BMW', value: 'bmw' },
    { label: 'Audi', value: 'audi' },
    { label: 'Mercedes', value: 'mercedes' },
  ];

  selectedCars: string[] = [];

  async ngOnInit() {
    this.codes = [
      { code: '12556' },
      { code: '61566' },
      { code: '78266' },
      { code: '97223' },
      { code: '23657' },
    ];

    this.sharedTitleService.setTitle('eSocial S-2399 Trabalhador Sem Vínculo');

    this.competenciaAtual =
      new Date().getMonth() + 1 + '/' + new Date().getFullYear();
    await this.setUpTable();
    this.dataListagem = [];
    this.currentDate = new Date();
    this.obterDataAtual();
  }

  async setCompetencia() {
    this.competenciaAtual = this.searchComp;

    if (this.searchComp) {
      const partes = this.searchComp.split('/');
      const mes = partes[0];
      const ano = partes[1];
      this.obterDataAtual(Number(mes), Number(ano));
    }

    await this.setUpTable();
  }

  async calcularPorcentagemSomada(items: any) {
    let soma = 0;

    for (let i = 0; i < items.length; i++) {
      soma += items[i].percent_concluido;
    }

    this.porcentagemTotal = (soma / items.length).toFixed(2);
  }

  exportDataToXlsx() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataListagem);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'Relatorio.xlsx');
  }

  async setUpTable() {
    this.getUsuariosExecutor();
    this.getUsuariosCordenadores();
    await this.getListagem();
  }

  exportDataToEmpregadosXlsx(empregados: any) {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(empregados);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'Relatorio.xlsx');
  }

  async getListagem() {
    this.loading = true;

    this.essocialService.getListagem(this.competenciaAtual).subscribe(
      (listagem: any) => {
        this.loading = false;
        this.dataListagem = listagem;
        this.totalEmpresas = listagem.length;
        this.backupData = JSON.parse(JSON.stringify(listagem));
        this.formateEmpresasToFilter();
        console.log(this.dataListagem);
        this.calcularTotalEmpregados(listagem);
        this.calculaPorcentagem();
        this.calcularPorcentagemSomada(this.dataListagem);
      },
      (_) => {
        this.loading = false;
      }
    );
  }

  calcularTotalEmpregados(data: any) {
    let totalEmpregados = 0;

    data.forEach((empresa: any) => {
      totalEmpregados += empresa.empregados.length;
    });

    this.totalTrabalhadores = totalEmpregados;
  }

  filterTransferidos($event: any) {
    this.dataListagem = this.backupData;
    if ($event.value == 'Transmitido') {
      this.dataListagem = this.dataListagem.filter((empresa: any) => {
        return empresa.empregados.every(
          (empregado: any) => empregado.situacao == 'Transmitido'
        );
      });
    }

    if ($event.value === 'Não transmitido') {
      this.dataListagem = this.dataListagem.filter((empresa: any) => {
        return empresa.empregados.every(
          (empregado: any) => empregado.situacao == 'N\u00e3o Transmitido'
        );
      });
    }

    if ($event.value === 'Transmitido em atraso') {
      this.dataListagem = this.dataListagem.filter((empresa: any) => {
        return empresa.empregados.every(
          (empregado: any) => empregado.situacao == 'Transmitido em atraso'
        );
      });
    }
  }

  getUsuariosExecutor() {
    this.usuariosService.getUsuariosAtivosRh().subscribe((data: any) => {
      this.usuariosExecutoresRh = data.map((x: any) => {
        return { name: x.login_col, value: x.colaborador_id };
      });

      const objetosFiltrados = this.usuariosExecutoresRh.filter(
        (obj: { name: any }, index: any, arr: any[]) => {
          return (
            arr.findIndex((t: { name: any }) => t.name === obj.name) === index
          );
        }
      );

      const listaCapitalizada = objetosFiltrados.map(
        (obj: { name: string }) => {
          const nameComEspaco = obj.name.replace('.', ' ');
          const nameComPrimeiraLetraMaiuscula = nameComEspaco
            .toLowerCase()
            .replace(/\b\w/g, (c: string) => c.toUpperCase());

          return {
            ...obj,
            name: nameComPrimeiraLetraMaiuscula,
          };
        }
      );

      this.usuariosExecutoresRh = listaCapitalizada;
    });
  }

  calculaPorcentagem() {
    let contEmpresasOk = 0;
    let contEmpresasPossuiPendencia = 0;
    for (let i = 0; i < this.dataListagem.length; i++) {
      if (this.dataListagem[i].percent_concluido != 100) {
        contEmpresasPossuiPendencia++;
      } else {
        contEmpresasOk++;
      }
    }
    this.valorProgresso =
      (contEmpresasOk * 100) / (contEmpresasOk + contEmpresasPossuiPendencia);
    this.valorProgresso = Number(this.valorProgresso.toFixed(2));
  }

  getUsuariosCordenadores() {
    this.usuariosService.getUsuariosAtivosRh().subscribe((data: any) => {
      this.usuariosCordenadoresRh = data.map((x: any) => {
        return { name: x.login_ori, value: x.id_usuario_ori };
      });

      const objetosFiltrados = this.usuariosCordenadoresRh.filter(
        (obj: { name: any }, index: any, arr: any[]) => {
          return (
            arr.findIndex((t: { name: any }) => t.name === obj.name) === index
          );
        }
      );

      const listaCapitalizada = objetosFiltrados.map(
        (obj: { name: string }) => {
          const nameComEspaco = obj.name.replace('.', ' ');
          const nameComPrimeiraLetraMaiuscula = nameComEspaco
            .toLowerCase()
            .replace(/\b\w/g, (c: string) => c.toUpperCase());
          return {
            ...obj,
            name: nameComPrimeiraLetraMaiuscula,
          };
        }
      );

      this.usuariosCordenadoresRh = listaCapitalizada;
    });
  }

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dt.filterGlobal(filterValue, 'contains');
  }

  clearFilters() {
    this.filters = [];
    this.empSelecionada = [];
    this.codString = '';
    this.respSelecionado = [];
    this.cordSelecionado = [];
    this.status = [];
    this.getListagem();
  }

  getEventValue($event: any): string {
    return $event.target.value;
  }

  verifyFiterToRow(data: any) {
    const rowItem = this.findItemById(data.cod_empresa);
    const i = rowItem?.index || 0;
    const subFilter = this.subFilters[i];

    const filtred = data.empregados.filter((x: any) => {
      if (x.nome_empregado.includes(subFilter?.value)) {
        return x;
      }
    });

    const empresaEncontrada = this.dataListagem.find(
      (empresa: any) => empresa.cod_empresa === data.cod_empresa
    );

    empresaEncontrada.empregados = filtred;
    return true;
  }

  findItemById(idEmpresa: any) {
    for (let i = 0; i < this.subFilters.length; i++) {
      if (this.subFilters[i].id_empresa === idEmpresa) {
        return { index: i, item: this.subFilters[i] };
      }
    }
    return null; // retorna null se o item não for encontrado
  }

  addFilter(value: any, filterType: any) {
    let filterValue = '';

    if ('value' in value) {
      filterValue = value.value;
    } else {
      filterValue = (value.target as HTMLInputElement).value;
    }

    this.filters = this.filters.filter(
      (item: any) => item.filterType !== filterType
    );

    if (Array.isArray(filterValue) && filterValue.length == 0) {
      this.visibleTable = false;
      this.dataListagem = JSON.parse(JSON.stringify(this.backupData));
      this.visibleTable = true;
      console.log(this.dataListagem);

      this.getListagem();
    }

    if (Array.isArray(filterValue)) {
      for (const x of filterValue) {
        this.filters.push({ value: x.value, filterType: filterType });
      }
    } else {
      this.filters.push({ value: filterValue, filterType: filterType });
    }

    this.execFilters();
  }

  formateEmpresasToFilter() {
    this.filterEmpresa = this.dataListagem.map((x: any) => {
      return { name: x.razao_social, value: x.razao_social };
    });
  }

  execFilters() {
    this.dataListagem = JSON.parse(JSON.stringify(this.backupData));

    const filteredEmpresas = this.dataListagem.filter((empresa: any) => {
      return this.filters.every((filtro: any) => {
        const filtroValue = filtro.value.toLowerCase();

        let empresaValue = empresa[filtro.filterType.toLowerCase()];

        if (
          typeof empresaValue === 'string' &&
          typeof empresaValue.toLowerCase === 'function'
        ) {
          empresaValue = empresaValue.toLowerCase();
        }

        if (typeof empresaValue === 'string') {
          return empresaValue.includes(filtroValue.toLowerCase());
        } else {
          return empresaValue == filtroValue;
        }
      });
    });

    this.dataListagem = filteredEmpresas;
  }
}
