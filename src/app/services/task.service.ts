import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Fixed typo 'obeservable' to 'Observable'
import { Task } from '../Task';
import { TASKS } from '../mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  getTasks(): Observable<Task[]> { // Fixed the return type to 'Observable<Task[]>'
    return of(TASKS);
  }
}
