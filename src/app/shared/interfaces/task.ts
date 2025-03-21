import { Subtask } from "./subtask";

export interface Task {
    id?: string; // ? optional
    title: string;
    description: string;
    assignedTo: string[];
    status: 'toDo' | 'inProgress' | 'awaitFeedback' | 'done';
    dueDate: string;
    prio: 'Urgent' | 'Medium' | 'Low';
    category: 'Technical Task' | 'User Story';
    subTasks: Subtask[]; 
}
