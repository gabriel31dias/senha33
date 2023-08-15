import { environment } from '../../../environments/environment'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SessionService } from '../global/session.service'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class Tributacoes {
  session: any
  constructor (private http: HttpClient, private sessionService: SessionService) {
    this.session = this.sessionService.session
  }

  getTributacoes (objSend: any): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'tributacoes', { params: objSend, headers: { userid: this.session.id_usuario }})
  }
}
