import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models/task.models';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { TaskProfileService } from 'src/app/core/services/task.service';
import { DndDropEvent } from 'ngx-drag-drop';
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  task: Task = new Task();

  dataSource : Task[];

  constructor(private taskService : TaskService,  private router: Router) { }

  ngOnInit() {
    this.getAllTasks();
  }
  goToHome() {
    this.router.navigate(['/']);
  }
  public getAllTasks = () => {
    console.log('aaaaaa');
    this.taskService.getlistTask()
    .subscribe(res => {
   //this.isLoading = false;

     this.dataSource = res as Task[];
      console.log(res);

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
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
