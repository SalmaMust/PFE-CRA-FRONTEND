
import { Component, OnInit } from '@angular/core';
import { AbsenceService } from '../absence.service';
import { Absence } from 'src/app/core/models/absence.models';
import { Router } from '@angular/router';
import { FormBuilder } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { UserService } from '../../utilisateur/user.service';
import { User } from 'src/app/core/models/auth.models';
@Component({
  selector: 'app-add-absence',
  templateUrl: './add-absence.component.html',
  styleUrls: ['./add-absence.component.scss']
})
export class AddAbsenceComponent implements OnInit {
  typeAbsence: any = ['CP', 'Maladie']
  status: any = ['En attente','Refuser','Accepter','Enregistrer'
  
  ]
  absence: Absence = new Absence();
  users : User[];

  submitted = false;

  
  
  constructor(public fb: FormBuilder,private userService: UserService,private absenceService: AbsenceService,  private router: Router) {

   }
   typeAbsenceForm = this.fb.group({
    name: ['']
  })
  statusForm = this.fb.group({
    name: ['']
  })
  ngOnInit(): void {
    this.getAllUsers();

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
    alert(JSON.stringify(this.typeAbsenceForm.value))   
    alert(JSON.stringify(this.statusForm.value))   

  }

  gotoList() {
    this.router.navigate(['/list-absence']);
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

