import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
  tasks: Array<any> = [];
  constructor(public navCtrl: NavController) {
  	this.tasks = [
		{title:'Milk', status:'open'},
		{title:'Eggs', status:'open'},
		{title:'Syrup', status:'open'},
		{title:'Pancake Mix', status:'open'}
  }

  ngOnInit() {
  }

}
