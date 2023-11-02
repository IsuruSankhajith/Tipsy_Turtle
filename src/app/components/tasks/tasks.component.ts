import { Component } from '@angular/core';

import { Task} from '../../Task';
import { TASKS } from '../../mock-task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService){}

  this.task = this.Service.getTasks();

}
