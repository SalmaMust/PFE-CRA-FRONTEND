import { User } from './auth.models';
import { Project } from './project.models';

export class Task {
    id?:string;
    taskName: string;
    date: Date;
    user: User;
    project: Project;
}