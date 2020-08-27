
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from 'src/app/core/models/task.models';
import { Router } from '@angular/router';
import { UserService } from '../../utilisateur/user.service';
import { ProjectService } from '../../project/project.service';
import { Project } from 'src/app/core/models/project.models';
import { User } from 'src/app/core/models/auth.models';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  task: Task = new Task();
  submitted = false;
  users : User[];
  projects : Project[];

  constructor(private taskService: TaskService,private userService: UserService, private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProjects();
    this.getAllUsers();
  }

  newUser(): void {
    this.submitted = false;
    this.task = new Task();
  }
  goToHome() {
    this.router.navigate(['/']);
  }
  save(){
    console.log(this.task);
    
    this.taskService.createTask(this.task)
      .subscribe(data =>  console.log(data), error => console.log(error));
    this.task = new Task();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/task-board']);
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

