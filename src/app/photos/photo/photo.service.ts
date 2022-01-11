import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../interface/photo';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

  constructor(private http: HttpClient) { }

  listFromUser(userName: string) {
    return this.http
      .get<Photo[]>(API + '/'+userName+'/photos');
  }

  listFromUserPaginated(userName: string, page: number) {

    const param = new HttpParams().append('page', page.toString());
    return this.http
      .get<Photo[]>(API + '/'+userName+'/photos', { params: param });
  }
}
