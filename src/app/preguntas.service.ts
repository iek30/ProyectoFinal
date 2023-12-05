import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  private apiUrl = 'http://localhost:3000/pregunta?id=1';

  constructor(private http: HttpClient) { }

  getPreguntas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
