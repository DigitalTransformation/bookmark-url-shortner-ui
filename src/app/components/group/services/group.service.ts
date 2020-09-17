import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../../shared/data.service';
import {Group} from '../../group/model/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private getgroupUrl: string;
  private postgroupUrl: string;
  private updategroupUrl: string;
  private emailGlobal = sessionStorage.getItem('emailGlobal');

  constructor(private http: HttpClient,
              private dataService: DataService) {
    this.getgroupUrl = 'http://localhost:8081/group/all/';
    this.postgroupUrl = 'http://localhost:8081/group/create';
    this.updategroupUrl = 'http://localhost:8081/group/update';
  }

  // tslint:disable-next-line:typedef
  public findAll(emailGlobal: string){
    console.log(this.emailGlobal);
    return this.http.post<Group[]>(this.getgroupUrl, this.emailGlobal);
  }
  // tslint:disable-next-line:typedef
  public save(group: Group){
    return this.http.post<Group>(this.postgroupUrl, group);
  }

  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  public update(group: Group){
    return this.http.patch(this.updategroupUrl, group);
  }
}
