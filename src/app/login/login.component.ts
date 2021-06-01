import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LeadService } from '../lead.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(
    private leadService: LeadService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  loginProcess() {
    console.log('inside login')
    this.leadService.login(this.formGroup.value).subscribe((result) => {

      if (result.data.match == true) {
        localStorage.setItem(
          'currentUser',
          JSON.stringify(result.data.payload)
        );
        localStorage.setItem('token', JSON.stringify(result.data.token));
      
    this.router.navigate(['/home'], { relativeTo: this.activatedRoute });
        return result;

      } else {
        this.router.navigate(['/home'], { relativeTo: this.activatedRoute });
      }
    });
  }
}
