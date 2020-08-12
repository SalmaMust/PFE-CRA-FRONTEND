import { Client } from './client.models';

export class Project {
    id?:string;
    projectName: string;
    description: string;
    dateDebut: Date; 
    dateFin: Date; 
    status: string;
    client: Client;
    type: string;
    priorite: string;

}






const widgetData = [
    {
        icon: 'grid',
        value: 210,
        text: 'Total Tasks'
    },
    {
        icon: 'check-square',
        value: 121,
        text: 'Total Tasks Completed'
    },
    {
        icon: 'users',
        value: 12,
        text: 'Total Team Size'
    },
    {
        icon: 'clock',
        value: 2500,
        text: 'Total Hours Spent'
    },
];