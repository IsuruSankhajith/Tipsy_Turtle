import { Component } from '@angular/core';
import { Task} from '../../Task';
import { TASKS } from '../../mock-task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = [];

}
