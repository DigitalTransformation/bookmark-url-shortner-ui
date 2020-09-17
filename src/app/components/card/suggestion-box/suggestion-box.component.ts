import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DataService} from '../../../shared/data.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-suggestion-box',
  templateUrl: './suggestion-box.component.html',
  styleUrls: ['./suggestion-box.component.css']
})
export class SuggestionBoxComponent implements OnInit {

  id: number;
  suggestionText: string;
  datarequest: any;
  emailGlobal = sessionStorage.getItem('emailGlobal');


  private sugestionUrl = 'http://localhost:8081/card/suggestion/';
  private finalUrl: string;
  constructor(private dialogRef: MatDialogRef<SuggestionBoxComponent>,
              private dataService: DataService,
              private httpClient: HttpClient,
              public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) data) {
    this.id = data;
    this.datarequest = {card_id: this.id, email: this.emailGlobal, suggestion_text: this.suggestionText};
  }

  ngOnInit(): void {
  }

  OnSubmit(){
    this.finalUrl = this.sugestionUrl;
    this.httpClient.post(this.finalUrl, this.datarequest).subscribe(res => {
      alert('Suggestion submitted for validation');
      this.dialogRef.close();
    });
  }

  // tslint:disable-next-line:typedef
  close(){
    this.dialogRef.close();
  }






}
