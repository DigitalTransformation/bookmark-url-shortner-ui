import { Component, OnInit } from '@angular/core';
import { CardServiceService} from '../services/card-service.service';
import { Card } from '../model/card';
import {DataService} from '../../../shared/data.service';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CardListDialogComponent} from '../card-list-dialog/card-list-dialog.component';
import {ShareUrlComponent} from '../share-url/share-url.component';
import {SuggestionBoxComponent} from '../suggestion-box/suggestion-box.component';

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
  private baseUrl = 'http://localhost:8081/card/';

  constructor(private cardService: CardServiceService,
              private dataService: DataService,
              private httpClient: HttpClient,
              public dialog: MatDialog
  ) {
    this.emailGlobal = dataService.getemailGlobal();
  }


  // tslint:disable-next-line:typedef
  onEdit(id: number){
    this.openDialog(id);
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
  // tslint:disable-next-line:typedef
  openDialog(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = id;
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    this.dialog.open(CardListDialogComponent, dialogConfig);
  }

  // tslint:disable-next-line:typedef variable-name
  openDialogShare(short_url: string){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = short_url;
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    this.dialog.open(ShareUrlComponent, dialogConfig);
  }

  // tslint:disable-next-line:typedef
  openDialogSuggest(id: number){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = id;
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    this.dialog.open(SuggestionBoxComponent, dialogConfig);
  }
}
