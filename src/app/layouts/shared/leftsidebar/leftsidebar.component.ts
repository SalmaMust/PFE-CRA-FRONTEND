import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { SIDEBAR_WIDTH_CONDENSED } from '../../layout.model';
import { UserService } from 'src/app/pages/apps/utilisateur/user.service';
import { User } from 'src/app/core/models/auth.models';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss'],

})
export class LeftsidebarComponent implements OnInit {

  @Input() sidebarType: string;
  user: User ;
  currentUser: User; 
  id: String;
  constructor(private userService : UserService,private router: Router, private authenticationService: AuthenticationService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

  ngOnInit() {
    this.getUserByid();
    
  }

  getUserByid(){
    const id: string = this.currentUser.id;
    this.userService.getUserById(id)
    .subscribe( user => {
      this.user = user;
      console.log(user);
      
          }) ;
  }
  isSidebarCondensed() {
    return this.sidebarType === SIDEBAR_WIDTH_CONDENSED;
  }

  /**
   * Logout the user
   */
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/account/login'], { queryParams: { returnUrl: '/' } });
  }
}
