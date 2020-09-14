import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EmailServiceService} from '../card/services/email-service.service';
import {Email} from '../card/model/email';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  emailid: Email;
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private emailservice: EmailServiceService) {
    this.emailid = new Email();
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  onSubmit(){
    this.gotoHomePage();
    /*this.emailservice.save(this.emailid).subscribe(result => this.gotoHomePage());*/
  }
  // tslint:disable-next-line:typedef
  gotoHomePage(){
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
  }

}
