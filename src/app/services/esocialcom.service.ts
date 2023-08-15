import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Empresas } from 'src/app/interfaces/esocial/empresas';
import { environment } from 'src/environments/environment';
import { EsocialCom } from '../interfaces/esocial/eSocialCom';
import { SessionService } from './global/session.service';

@Injectable({
  providedIn: 'root'
})
export class EsocialcomService {
  session: any
  constructor (private http: HttpClient, private sessionService: SessionService) {
    this.session = this.sessionService.session
  }

  private url = environment.base_url;

  getListaEmpresasEsocialCom(competencia: string): Observable<EsocialCom[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const url = `${environment.base_url}api_angular/esocial/esocial_com/api/listaEmpresasDominio_v2/`;
    let params = new HttpParams().append('dados', JSON.stringify(competencia));

    return this.http.post<EsocialCom[]>(url, params, httpOptions)
  }

  getListaEmpresasAfastados(competencia: string = (new Date().getMonth() + 1) + '/' + new Date().getFullYear()): Observable<Empresas[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    const url = `${environment.base_url}api_angular/esocial/esocial_afastamentos/api/listaEmpresasDominio_v2/`;
    let params = new HttpParams().append('dados', JSON.stringify(competencia));

    return this.http.post<Empresas[]>(url, params, httpOptions);
  }

  getListaEmpresasTreeAfastados(competencia: string = (new Date().getMonth() + 1) + '/' + new Date().getFullYear()): Observable<Empresas[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    const url = `${environment.base_url}api_angular/esocial/esocial_afastamentos/api/getJsonTreeTable/`;
    let params = new HttpParams().append('dados', JSON.stringify(competencia));

    return this.http.post<Empresas[]>(url, params, httpOptions);
  }

  disparaEmail(competencia: string = (new Date().getMonth() + 1) + '/' + new Date().getFullYear()): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    const url = `${environment.base_url}api_angular/esocial/esocial_sem_movimento/api/disparaEmailParaResponsaveisECoordenadores/`;
    let params = new HttpParams().append('dados', JSON.stringify(competencia));

    return this.http.post<string>(url, params, httpOptions);
  }

  getColaboradores(): Observable<Empresas[]>{
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const url = `${this.url}api_angular/esocial/esocial_com/api/colabodores_rh`;

    return this.http.get<Empresas[]>(url, { headers })
  }

  getResponsaveis(competencia: string = ''): Observable<Empresas[]>{
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const url = `${this.url}api_angular/esocial/esocial_com/api/getResponsaveisEmpresasRH_v2?competencia=${competencia}`;

    return this.http.get<Empresas[]>(url, { headers })
  }

  insertColaboradorEmpresa(dado: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    const url = `${this.url}api_angular/esocial/esocial_com/api/empresas_esocial_com_movimento`;
    let params = new HttpParams().append('dados', JSON.stringify(dado));

    return this.http.put(url, params, httpOptions);
  }

  getNomePessoa(formData: any): Observable<string>{
    const url = `${environment.base_url}api_angular/esocial/esocial_sem_movimento/api/buscaNome/`;
    return this.http.post<string>(url, formData);
  }

  getResponsaveisECoordRH(): Observable<Empresas[]>{
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const url = `${this.url}api_angular/esocial/esocial_sem_movimento/api/listaRespECoordRH/`;

    return this.http.get<Empresas[]>(url, { headers })
  }

  updateRespCoord(formData: any){
    const url = `${environment.base_url}api_angular/esocial/esocial_sem_movimento/api/updateRespECoordRH/`;
    return this.http.post(url, formData);
  }
}
