import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  private apiURL:string = "https://jsonplaceholder.typicode.com/posts/"

  constructor(
    private http:HttpClient
  ) { }
  respuestaAPi(){
    return this.http.get(this.apiURL)
  }

}
