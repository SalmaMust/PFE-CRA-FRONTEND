
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/auth.models';
import { Router } from '@angular/router';
import { UserService } from 'src/app/pages/apps/utilisateur/user.service';


@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.scss']
})
export class DetailProfileComponent implements OnInit {
  user: User ;
  submitted: Boolean = false;
  
  constructor( private userService: UserService ,private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.getUserByid();
    
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
    this.router.navigate(['/pages-profile']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}