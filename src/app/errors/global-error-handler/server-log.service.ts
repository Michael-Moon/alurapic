import { environment } from './../../../environments/environment';
import { ServerLog } from './serve-log';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.serverLog;

@Injectable({ providedIn: 'root'})
export class ServerLogService {

  constructor(private http: HttpClient){}

  log(log: ServerLog){
    return this.http.post(API + '/infra/log', log)
  }
}
