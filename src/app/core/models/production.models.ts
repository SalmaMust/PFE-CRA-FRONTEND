import { Timesheet } from './timesheet.models';
import { Task } from './task.models';


export class Production {
  id?: String;
  date: Date;
  duration:Number;
  timesheet: Timesheet;
  tache: Task;
}