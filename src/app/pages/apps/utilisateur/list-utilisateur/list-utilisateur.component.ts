import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/auth.models';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProfileService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.scss']
})
export class ListUtilisateurComponent implements OnInit {

  dataSource : User[];
  currentUser: User; 

  constructor(private userService : UserService,private activeRoute: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.getAllUsers();
  }

  public getAllUsers = () => {
    console.log('aaaaaa');
    this.userService.getUserByManager(this.currentUser.id)
    .subscribe(res => {
   //this.isLoading = false;

     this.dataSource = res as User[];
      console.log(res);

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
    })
  }

  goToAdd() {
    this.router.navigate(['add-user']);
  }

  public deleteUser  = (id) => {
    this.userService.delete(id)
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

  userDetails ( id ){

    //this.router.navigate(['espace-administration/details/'+id]);
    this.router.navigate(['user-details/'+id]);
  }
  employeeDetails ( id ){

    this.router.navigate(['app-employee/'+id]);
  }
  
}
