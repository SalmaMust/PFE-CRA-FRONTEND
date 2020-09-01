import { User } from './auth.models';
import { Production } from './production.models';
import { Internal } from './internal.models';

export class Timesheet {
    id?:string;
    month: string;
    year: string;
    creationDate: Date; 
    validation: String; 
    nameValidator: String;
    detailValidation: String;
    totalProduction: Number;
    totalAbsence: Number;
    status: string;
    productionList: Production[];
    interneList: Internal[];
    user : User;
    totalIntern:Number;
}