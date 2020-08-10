import { Component, OnInit } from '@angular/core';

import { DndDropEvent } from 'ngx-drag-drop';


//import { tasks } from './data';
import { TaskService } from '../task.service';
import { Task } from 'src/app/core/models/task.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kanbanboard',
  templateUrl: './kanbanboard.component.html',
  styleUrls: ['./kanbanboard.component.scss']
})

/**
 * Kanbanboard component - handling task-board with sidebar and content
 */
export class KanbanboardComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Task data
  task: Task = new Task();

  dataSource : Task[];
  tasks: Task[];
  todoTasks: Task[];
  inprogressTasks: Task[];
  reviewTasks: Task[];
  doneTasks: Task[];
  todoSize: any ;
  inprogressSize: any ;
  reviewSize: any ;
  doneSize: any ;

  constructor(private taskService : TaskService,  private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Apps', path: '/' }, { label: 'Tasks', path: '/' }, { label: 'Tasks Board', active: true }];
    this.getAllTasks();
        /**
     * Fetches Data
     */
   
  }
  /**
   * On task drop event
   */
  onDrop(event: DndDropEvent, filteredList?: any[], targetStatus?: string) {
    if (filteredList && event.dropEffect === 'move') {
      let index = event.index;
      console.log(targetStatus);
      event.data.status = targetStatus;
      console.log('evnettt dataaa', event.data);
      this.save(event.data);
      //
      if (typeof index === 'undefined') {
        index = filteredList.length;
      }

      filteredList.splice(index, 0, event.data);
    }
  }

  save(task: Task){
    console.log(task);
    
    this.taskService.createTask(task)
      .subscribe(data =>  console.log(data), error => console.log(error));
    //this.task = new Task();
    //this.gotoList();
  }

  /**
   * on dragging task
   * @param item item dragged
   * @param list list from item dragged
   */
  onDragged(item: any, list: any[]) {
    const index = list.indexOf(item);
    console.log(item);
    //this.save(item)
    list.splice(index, 1);
  }

  /**
   * Fetches the value of kanbanboard data
   */
  private _fetchData() {
    // all tasks
    console.log('fetch data');
    
    this.todoTasks = this.tasks.filter(t => t.status === 'todo');
    this.inprogressTasks = this.tasks.filter(t => t.status === 'inprogress');
    this.reviewTasks = this.tasks.filter(t => t.status === 'review');
    this.doneTasks = this.tasks.filter(t => t.status === 'done');
    this.doneSize = this.doneTasks.length;
    this.todoSize = this.todoTasks.length;
    this.reviewSize = this.reviewTasks.length;
    this.inprogressSize = this.inprogressTasks.length;
  }

  public getAllTasks = () => {
    console.log('aaaaaa');
    this.taskService.getlistTask()
    .subscribe(res => {
   //this.isLoading = false;

     this.tasks = res as Task[];
      console.log(res);
      this._fetchData();

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log('kkkkkkkkkkkkkkk', error);
    })
  } 
  goToAdd() {
    this.router.navigate(['add-task']);
  }

  public deleteTask  = (id) => {
    this.taskService.delete(id)
    .subscribe(res => {
   //this.isLoading = false;

  /*    this.dataSource.find(id) = res as User[];
    console.log(res); */

    this.dataSource.forEach(
      (item, index) => {
        if(item.id == id)
        this.dataSource.splice(index, 1);
      }
    );

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
    })
  }

  taskDetails ( id ){

    //this.router.navigate(['espace-administration/details/'+id]);
    this.router.navigate(['task-details/'+id]);
  }
}