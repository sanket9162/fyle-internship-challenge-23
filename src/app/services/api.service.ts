import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }
  getRepos(githubUsername:string,page:number,per_page:number ):Observable<unknown>{
    return this.httpClient.get<any[]>(`https://api.github.com/users/${githubUsername}/repos?page=${page}&per_page=${per_page}`)
  }

  getRepoLanguages(githubUsername: string, repo:string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/repos/${githubUsername}/${repo}/languages`);
  }
  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
