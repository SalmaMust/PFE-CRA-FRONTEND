import { User } from './auth.models';
import { Project } from './project.models';

export class Task {
    id?:string;
    taskName: string;
    date: Date;
    status: string;
    user: User;
    project: Project;
priorite: string;
description: String;
} 