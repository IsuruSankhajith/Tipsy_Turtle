import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task = {} as Task;
  faTimes = faTimes

  constructor() {}

  ngOnInit() {
    // You can add initialization logic here if needed
  }
}
