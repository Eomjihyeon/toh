import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register-hero',
  templateUrl: './register-hero.component.html',
  styleUrls: ['./register-hero.component.scss']
})
export class RegisterHeroComponent implements OnInit {
  form:FormGroup;
//html에  formcontrol이름과 동일하게 해야함
  constructor(private  fb:FormBuilder) {
    this.form = this.fb.group({
      name: null,
      email: null,
      sex: null,
      country: null,
      address: null,
    });

  }

  ngOnInit() {
  }

}
