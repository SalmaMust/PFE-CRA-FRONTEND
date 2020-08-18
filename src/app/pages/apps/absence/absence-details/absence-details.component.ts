
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbsenceService } from '../absence.service';
import { Absence } from 'src/app/core/models/absence.models';
import { Router } from '@angular/router';
import { FormBuilder } from "@angular/forms";
import { User } from 'src/app/core/models/auth.models';
import { UserService } from '../../utilisateur/user.service';

@Component({
  selector: 'app-absence-details',
  templateUrl: './absence-details.component.html',
  styleUrls: ['./absence-details.component.scss']
})

export class AbsenceDetailsComponent implements OnInit {
  typeAbsence: any = ['CP', 'Maladie']
  status: any = ['Pending','refused','accepted']
  users : User[];

  absence: Absence ;
  submitted: Boolean = false;
   
  

  constructor( public fb: FormBuilder,private userService: UserService,private absenceService: AbsenceService ,private activeRoute: ActivatedRoute, private router: Router) {

   }
   typeAbsenceForm = this.fb.group({
    name: ['']
  })
  statusForm = this.fb.group({
    name: ['']
  })
  ngOnInit(): void {

    this.getAbsenceByid();
    console.log(this.absence);
    this.getAllUsers();

    
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
  getAbsenceByid(){
    const id: string = this.activeRoute.snapshot.params.id;
    this.absenceService.getAbsenceById(id)
    .subscribe( absence => {
      this.absence = absence;
      console.log(absence);
      
          }) ;
  }

  save(){
    console.log(this.absence);
    
    this.absenceService.createAbsence(this.absence)
      .subscribe(data =>  console.log(data), error => console.log(error));
    this.absence = new Absence();
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/list-absence']);
  }

  onSubmit() {
    alert(JSON.stringify(this.typeAbsenceForm.value))
    alert(JSON.stringify(this.statusForm.value))   
    this.submitted = true;
    this.save();    
  }
}