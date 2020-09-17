import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../services/group.service';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../../shared/data.service';

@Component({
  selector: 'app-create-card-in-group',
  templateUrl: './create-card-in-group.component.html',
  styleUrls: ['./create-card-in-group.component.css']
})
export class CreateCardInGroupComponent implements OnInit {

  uploadForm: FormGroup;
  selectedFile: File;
  message: string;
  emailGlobal: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groupService: GroupService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private dataService: DataService,
  ) {
    this.emailGlobal = sessionStorage.getItem('emailGlobal');
    this.buildForm();
  }


  // tslint:disable-next-line:typedef
  buildForm(){
    this.uploadForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
      component: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      team: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      tribe: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      updated_by: [''],
      created_by: [''],
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.groupService.save(this.uploadForm.value).subscribe(result => this.gotoGroupList());

  }
  // tslint:disable-next-line:typedef
  gotoGroupList() {
    this.router.navigate(['/home/group/listCardsInGroup']);
  }

  ngOnInit(): void {
  }
}
