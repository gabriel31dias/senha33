import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { SessionService } from "../global/session.service";

@Injectable({
  providedIn: "root",
})
export class Essocial {
  session: any;
  constructor(
    private http: HttpClient,
  ) {}

  getListagem(competencia: string) {
    return this.http.get(
      environment.apiUrl +
        "/esocial/sem-vinculo-termino/listagem?competencia=" +
        competencia
    );
  }
}
