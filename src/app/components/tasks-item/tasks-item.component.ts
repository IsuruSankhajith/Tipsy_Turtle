import { Component, Input } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item', // Update the selector to match your HTML template
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent {
  @Input() task: Task = {} as Task;
}
