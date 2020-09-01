import { Component, OnInit } from '@angular/core';
import { Timesheet } from 'src/app/core/models/timesheet.models';
import { Internal } from 'src/app/core/models/internal.models';
import { Production } from 'src/app/core/models/production.models';
import { Task } from 'src/app/core/models/task.models';
import { User } from 'src/app/core/models/auth.models';
import { TaskService } from '../../tasks/task.service';
import { TimesheetService } from '../timesheet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-timesheet',
  templateUrl: './add-timesheet.component.html',
  styleUrls: ['./add-timesheet.component.scss']
})
export class AddTimesheetComponent implements OnInit {

  constructor(private taskService: TaskService, private timesheetService: TimesheetService , private activeRoute: ActivatedRoute, private router: Router) {
      
  }  
 //private toastr: ToastrService
 date = new Date();
 month = this.date.getMonth()+1;
 year = this.date.getFullYear();
 //dynamicArray: Array<DynamicGrid> = [];  
 //newDynamic: any = {};  
 days: DayItem[] = [];
 daysOfMonth = new Date(this.year, this.month, 0).getDate();
 dynamicArray: Array<any> = [];  
 newDynamic: Line;
 sousCategorie: any[] = [];

 months: any[] = [
   {id : 0, name: 'Janvier'},
   {id : 1, name: 'Février'},
   {id : 2, name: 'Mars'},
   {id : 3, name: 'Avril'},
   {id : 4, name: 'Mai'},
   {id : 5, name: 'Juin'},
   {id : 6, name: 'Juillet'},
   {id : 7, name: 'Aout'},
   {id : 8, name: 'Septembre'},
   {id : 9, name: 'Octobre'},
   {id : 10, name: 'Novembrer'},
   {id : 11, name: 'Décembre'}
 ];
 user: User;
 interncategories: any[] = [
   {id : 1, taskName: 'Office'},
   {id : 2, taskName: "Formation"},
   {id : 3, taskName: "Deplacement"}
 ];

 timesheet: Timesheet;

 interns: Internal[];
 submitted = false;

 productions : Production[];

 taches:Task[];

 ngOnInit(): void { 
 
   this.interncategories.forEach(val => this.sousCategorie.push(Object.assign({}, val)));
   this.getTimesheetByid();
   this.getInternByTimesheetId();
   this.getProductionByTimesheetId();

  // if(this.interns){
     /* console.log("ifffffff");
     
     for( let i=1;i<=this.daysOfMonth;i++)
     {
        let dayOfWeek = new Date(this.year, this.month, i).getDay();
         this.days.push({
           indexMonth: i,
           indexWeek:dayOfWeek,
           totalJournalier: null,
          }
           );
     }
     let newDynamic = {
       categorie: 'Interne',
       subCategorie : this.interns[0].categorie,
       days: this.days
     };
       for(let i=1; i<= this.interns.length; i ++){
         let index = this.interns[i].date.getDate();
         console.log("date", index);
         

       } */
  // }

  for( let i=1;i<=this.daysOfMonth;i++)
  {
     let dayOfWeek = new Date(this.year, this.month, i).getDay();
      this.days.push({
        indexMonth: i,
        indexWeek:dayOfWeek,
        totalJournalier: null,
       }
        );
  }

  console.log(this.days);
   this.newDynamic = {
   categorie: 'Interne',
   subCategorie: 'Office',
   days : this.days
 }; 
  //this.newDynamic.categorie = "Interne";
  //this.newDynamic.subCategorie = "Office";
  //this.newDynamic.days = this.days; 
   console.log("new dyn", this.newDynamic)
   this.dynamicArray.push(this.newDynamic);
  console.log("array", this.dynamicArray);
  
    // this.newDynamic = {title1: "", title2: "",title3:""};  
     //this.dynamicArray.push(this.newDynamic);  
 }  
 newUser(): void {
  this.submitted = false;
  this.timesheet = new Timesheet();
}
 addRow(index) {  
     let days: DayItem[] = [];
     for( let i=1;i<=this.daysOfMonth;i++)
     {
        let dayOfWeek = new Date(this.year, this.month, i).getDay();
         days.push({
           indexMonth: i,
           indexWeek:dayOfWeek,
           totalJournalier: null,
          }
           );
     }

     let newDynamic : Line = {
       categorie: 'Interne',
       subCategorie: 'Office',
       days : days
     }; 
    // newDynamic.categorie = "Interne";
     //newDynamic.subCategorie = "Office";
     //newDynamic.days = days;
     console.log('new line', newDynamic) 
     this.dynamicArray.push(newDynamic);  
     //this.toastr.success('New row added successfully', 'New Row');  
     console.log(this.dynamicArray); 
     
     return true;  
 }  
   
 deleteRow(index) {  
     if(this.dynamicArray.length ==0) {  
       //this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
         return false;  
     } else {  
         this.dynamicArray.splice(index, 1);  
         //this.toastr.warning('Row deleted successfully', 'Delete row');  
         return true;  
     }  
 }  

 getTimesheetByid(){
   const id: string = this.activeRoute.snapshot.params.id;
   console.log("ts id ",id);
   
   this.timesheetService.getTimesheetById(id)
   .subscribe( timesheet => {
     this.timesheet = timesheet;
     console.log(timesheet);
     this.user = timesheet.user;
     this.getAllTasks(timesheet.user.id);
         }) ;
      
 }
 save(){
  console.log(this.timesheet);
  
  this.timesheetService.createTimesheet(this.timesheet)
    .subscribe(data =>  console.log(data), error => console.log(error));
  this.timesheet = new Timesheet();
  this.gotoList();
}
gotoList() {
  this.router.navigate(['/list-timesheet']);
}
onSubmit() {
  this.submitted = true;
  this.save();    
}

getInternByTimesheetId(){
 const id: string = this.activeRoute.snapshot.params.id;
 console.log("ts id ",id);
 
 this.timesheetService.getInternByTimesheetId(id)
 .subscribe( interns => {
   this.interns = interns;
   console.log("interns " ,interns);
       }) ;
}



getProductionByTimesheetId(){
const id: string = this.activeRoute.snapshot.params.id;
console.log("ts id ",id);

this.timesheetService.getProductionByTimesheetId(id)
.subscribe( productions => {
 this.productions = productions;
 console.log("productios ",productions);
     }) ;
}


public getAllTasks = (id : String) => {
console.log('aaaaaa');
//console.log("id taskkk ", id)
this.taskService.gettasksByUserId(id)
.subscribe(res => {
//this.isLoading = false;
this.taches = res as Task[];
 console.log(res);

},
(error) => {
 //this.errorService.handleError(error);
 console.log(error);
})
}

onChange(categorieValue, index) {
console.log("cat value", categorieValue);
console.log('index', index);
this.dynamicArray[index].sousCategorie.splice(0, this.dynamicArray[index].sousCategorie.length);
if(categorieValue == "Interne"){
 //this.dynamicArray[index].sousCategorie.splice(0, this.dynamicArray[index].sousCategorie.length);
 this.interncategories.forEach(val => this.dynamicArray[index].sousCategorie.push(Object.assign({}, val)));
}
else{
 //this.dynamicArray[index].sousCategorie.splice(0, this.dynamicArray[index].sousCategorie.length);
 this.taches.forEach(val => this.dynamicArray[index].sousCategorie.push(Object.assign({}, val)));
}
console.log(this.dynamicArray[index].sousCategorie);
}


}



export class DayItem{
 indexMonth : Number;
 indexWeek : Number;
 totalJournalier: Number;
}


export class Line{
 categorie : String;
 subCategorie : String;
 days: DayItem[];
}

