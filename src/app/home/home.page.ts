import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  tasks: any[] = [];

  constructor() { }

  ngOnInit() {
    this.loadTasks();
  }

  ionViewWillEnter() {
    this.loadTasks();
  }

  loadTasks() {
    const tasks = localStorage.getItem('tasks');
    this.tasks = tasks ? JSON.parse(tasks) : [];
  }
}
