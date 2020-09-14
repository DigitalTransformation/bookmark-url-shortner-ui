import { Component, OnInit } from '@angular/core';
import {Card} from '../model/card';
import {CardServiceService} from '../services/card-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent  {
  uploadForm: FormGroup;
  selectedFile: File;
  message: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardService: CardServiceService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }


  // tslint:disable-next-line:typedef
  buildForm(){
    this.uploadForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      original_url: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      expire_date: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      active: [''],
      updated_by: ['', [ Validators.minLength(2), Validators.maxLength(30)]],
      team: ['', [ Validators.minLength(2), Validators.maxLength(30)]],
      tribe: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    });
  }
  // tslint:disable-next-line:typedef
  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.uploadForm.value);
    this.cardService.save(this.uploadForm.value).subscribe(result => this.gotoCardList());
    this.onUpload();

  }
  onUpload(){
    const uploadImageData = new FormData();
    uploadImageData.append('file', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('https://localhost:8081/card/upload', uploadImageData, { observe: 'response' })
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
  gotoCardList() {
    this.router.navigate(['/cards']);
  }
}
