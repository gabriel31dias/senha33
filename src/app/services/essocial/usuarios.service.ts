import { environment } from '../../../environments/environment'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Paginator } from 'primeng/paginator'
import { Observable } from 'rxjs'
import { SessionService } from '../global/session.service'

@Injectable({
  providedIn: 'root'
})
export class Usuarios {
  session: any
  constructor (private http: HttpClient, private sessionService: SessionService) {
    this.session = this.sessionService.session
  }

  getUsuariosAtivosBySetor (objSend: any):Observable<Paginator> {
    return this.http.post<any>(environment.apiUrl + 'users/getusuariosativosbysetor', objSend, { headers: { userid: this.session.id_usuario } })
  }

  getUsuariosAtivosRh ():Observable<Paginator> {
    //
    return this.http.get<any>(environment.base_api_cadastros + 'api/v2/ctrl?competencia_ano=2023&competencia_mes=2&setor_id=3')
  }

  getUsuariosAtivosContabilidade ():Observable<Paginator> {
    return this.http.get<any>(environment.base_api_cadastros + 'api/v2/ctrl?competencia_ano=2023&competencia_mes=2&setor_id=1')
  }
}
