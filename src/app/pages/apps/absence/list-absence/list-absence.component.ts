


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbsenceProfilService } from 'src/app/core/services/absence.service';
import { Absence } from 'src/app/core/models/absence.models';
import { AbsenceService } from '../absence.service';
import { FormBuilder } from "@angular/forms";
import { User } from 'src/app/core/models/auth.models';
import { UserService } from '../../utilisateur/user.service';

@Component({
  selector: 'app-list-absence',
  templateUrl: './list-absence.component.html',
  styleUrls: ['./list-absence.component.scss']
})
export class ListAbsenceComponent implements OnInit {
  typeAbsence: any = ['CP', 'Maladie']
  status: any = ['Pending','refused','accepted']
  absence: Absence = new Absence();
  dataSource : Absence[];
  selectValue: string[];
  submitted = false;
users: User[];
  constructor(public fb: FormBuilder,private userService: UserService,private absenceService : AbsenceService,  private router: Router) { }
  typeAbsenceForm = this.fb.group({
    name: ['']
  })
  statusForm = this.fb.group({
    name: ['']
  })
  ngOnInit() {
    this.getAllAbsences();
    this.getAllUsers();
  }

  public getAllAbsences = () => {
    console.log('aaaaaa');
    this.absenceService.getlistAbsence()
    .subscribe(res => {
   //this.isLoading = false;

     this.dataSource = res as Absence[];
      console.log(res);

    },
    (error) => {
      //this.errorService.handleError(error);
      console.log(error);
    })
  }

  goToAdd() {
    this.router.navigate(['add-absence']);
  }

  public deleteAbsence  = (id) => {
    this.absenceService.delete(id)
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

  absenceDetails ( id ){

    //this.router.navigate(['espace-administration/details/'+id]);
    this.router.navigate(['absence-details/'+id]);
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
  newUser(): void {
    this.submitted = false;
    this.absence = new Absence();
  }

  save(){
    console.log(this.absence);
    
    this.absenceService.createAbsence(this.absence)
      .subscribe(data =>  console.log(data), error => console.log(error));
      this.absence = new Absence();
      this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save(); 
     

  }

  gotoList() {
    this.router.navigate(['/list-absence']);
  }
}