import { Component, OnInit } from '@angular/core';
import { CardServiceService} from '../services/card-service.service';
import { Card } from '../model/card';
import {DataService} from '../../../shared/data.service';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  emailGlobal: string;
  cards: Card[];
  message: string;
  private selectedFile;
  private deleteUrl;
  private finalDelete;
  private uploadUrl = 'http://localhost:8081/card/upload/';
  private baseUrl = 'http://localhost:8081/card/';

  constructor(private cardService: CardServiceService,
              private dataService: DataService,
              private httpClient: HttpClient,
              public dialog: MatDialog
  ) {
    this.emailGlobal = dataService.getemailGlobal();
  }

  // tslint:disable-next-line:typedef
  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
  }

  // tslint:disable-next-line:typedef
  onUpload(id: number){
    const uploadImageData = new FormData();
    uploadImageData.append('file', this.selectedFile, this.selectedFile.name);
    this.httpClient.post(this.uploadUrl.concat(String(id)), uploadImageData, { observe: 'response' })
      .subscribe((response) =>
      {if (response.status === 200){
        this.message = 'Image upload success';
      }
      else{
        this.message = 'Image upload not succesful';
      }
      });
  }

  // tslint:disable-next-line:typedef
  onEdit(id: number){

  }

  // tslint:disable-next-line:typedef
  onDelete(id: number){
  this.deleteUrl  = this.baseUrl.concat(String(id)).concat('/').concat(this.emailGlobal);
  if (confirm('Are you sure to delete' + id)) {
      console.log('Implement delete functionality here');
    }
  this.httpClient.post(this.deleteUrl, '').subscribe();
  }
  // tslint:disable-next-line:typedef
  ngOnInit(){
    console.log(this.emailGlobal);
    this.cardService.findAll(this.emailGlobal).subscribe(data => {
    this.cards = data;
    });
  }
}
