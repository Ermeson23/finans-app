import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formEmail = this.fb.group({
    email: ["", [
      Validators.email,
      Validators.required
    ]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  showMessage() {
    alert("E-mail cadastrado com sucesso!");
  }
}
