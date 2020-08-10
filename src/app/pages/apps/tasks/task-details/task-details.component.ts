
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from 'src/app/core/models/task.models';
import { Router } from '@angular/router';
import { UserService } from '../../utilisateur/user.service';
import { ProjectService } from '../../project/project.service';
import { Project } from 'src/app/core/models/project.models';
import { User } from 'src/app/core/models/auth.models';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  task: Task ;
  submitted: Boolean = false;
  users : User[];
  projects : Project[];
  constructor( private taskService: TaskService ,private userService: UserService, private projectService: ProjectService,private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.getTaskByid();
    this.getAllProjects();
    this.getAllUsers();

  }

  getTaskByid(){
    const id: string = this.activeRoute.snapshot.params.id;
    this.taskService.getTaskById(id)
    .subscribe( task => {
      this.task = task;
      console.log(task);
      
          }) ;
  }

  save(){
    console.log(this.task);
    
    this.taskService.createTask(this.task)
      .subscribe(data =>  console.log(data), error => console.log(error));
    this.task = new Task();
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/task-board']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  public getAllProjects = () => {
    console.log('aaaaaa');
    this.projectService.getlistProject()
    .subscribe(res => {
   //this.isLoading = false;

     this.projects = res as Project[];
      console.log(res);

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
    })
  }

  public getAllUsers = () => {
    console.log('aaaaaa');
    this.userService.getlistUser()
    .subscribe(res => {
   //this.isLoading = false;

     this.users = res as User[];
      console.log(res);

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
    })
  }
}