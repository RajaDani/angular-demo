import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public dialogeRef: MatDialogRef<LoginComponent>) {}
  user = { username: '', password: '', remember: false };
  ngOnInit(): void {}

  onSubmit() {
    console.log('User ==>', this.user);
    this.dialogeRef.close();
  }
}
