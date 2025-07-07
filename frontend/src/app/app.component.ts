import { Component, OnInit } from '@angular/core';
import { AppService } from './app-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: any[] = [];
  user = { name: '', age: null };
  adduserToggle = false;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.appService.getData().subscribe({
      next: (data: any) => {
        this.users = data;
      },
      error: (err) => console.error('Error fetching users:', err)
    });
  }

  addUser() {
    this.adduserToggle = true;
  }

  submitUser(user: any) {
    this.appService.postData(user).subscribe({
      next: () => {
        this.adduserToggle = false;
        this.getUsers(); // refresh list
      },
      error: (err) => console.error('Error adding user:', err)
    });
  }
}
