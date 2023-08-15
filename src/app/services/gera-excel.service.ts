import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeraExcelService {

  constructor(
    private http: HttpClient
  ) { }

  geraExcel(body: any): Observable<Blob>{

    const url = `${environment.base_url}api_angular/gera_excel/get_file`;
    const HTTPOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html, application/xhtml+xml, */*',
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      'responseType': 'blob' as 'json'
   }
    return this.http.post<Blob>(url, body, HTTPOptions);
  }
}
