import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Abc } from './abc';

@Injectable({
  providedIn: 'root'
})
export class AbcService {
  url= 'https://localhost:5001/api/Home';
  constructor(private http:HttpClient) { }

  getListOfLevels(): Observable<Abc[]> {
    return this.http.get<Abc[]>(this.url+ '/getlevel');
  }

  edit(levelcode: string): Observable<Abc> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post<Abc>(this.url+ '/edit?levelcode='+ levelcode, httpOptions)//.subscribe(result => {},console.log(error));
  } 

  updateLevel(abc: Abc): Observable<Abc> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post<Abc>(this.url+ '/Updatelevel', abc, httpOptions);
  } 

}
