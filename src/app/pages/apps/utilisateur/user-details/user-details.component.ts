import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'src/app/core/models/auth.models';
import { Router } from '@angular/router';


@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User ;
  submitted: Boolean = false;
  
  constructor( private userService: UserService ,private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.getUserByid();
    
  }
  goToHome() {
    this.router.navigate(['/']);
  }
  getUserByid(){
    const id: string = this.activeRoute.snapshot.params.id;
    this.userService.getUserById(id)
    .subscribe( user => {
      this.user = user;
      console.log(user);
      
          }) ;
  }

  save(){
    console.log(this.user);
    
    this.userService.createUser(this.user)
      .subscribe(data =>  console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/utilisateur-list']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}