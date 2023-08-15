import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Observable, throwError } from 'rxjs'
import { SessionService } from './session.service'

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  session: any
  constructor (private http: HttpClient, private sessionService: SessionService) {
    this.session = this.sessionService.session
  }

  get<T> (data: object, endpointUrl: string = '', apiUrl: string = environment.apiUrl): Observable<T> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
    const params = new HttpParams().append('data', JSON.stringify(data))
    return this.http.get<T>(`${apiUrl}${endpointUrl}`, { headers, params })
  }

  post<T> (data: object, endpointUrl: string = '', apiUrl: string = environment.apiUrl): Observable<T> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
    const params = new HttpParams().append('data', JSON.stringify(data))
    return this.http.post<T>(`${apiUrl}${endpointUrl}`, params, { headers })
  }

  put<T> (data: object, endpointUrl: string = '', apiUrl: string = environment.apiUrl): Observable<T> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    const params = new HttpParams().append('data', JSON.stringify(data))
    return this.http.put<T>(`${apiUrl}${endpointUrl}`, params, { headers })
  }

  delete<T> (id: number, endpointUrl: string = '', apiUrl: string = environment.apiUrl): Observable<T> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    return this.http.delete<T>(`${apiUrl}${endpointUrl}/${id}`, { headers })
  }

  metodo_get_json<T>(dados: object, url: string): Observable<T> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let params = new HttpParams().append('dados', JSON.stringify(dados))
    return this.http.get<T>(`${environment.base_url}${url}`, { headers, params });
  }
}
