import { User } from './auth.models';

export class Absence {
    id?:string;
    type: string;
    user: User;

    startDate: Date; 
    endDate: Date; 
    status: string;
    reason: string;
}