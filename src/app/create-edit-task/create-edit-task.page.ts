import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-edit-task',
  templateUrl: './create-edit-task.page.html',
  styleUrls: ['./create-edit-task.page.scss'],
})
export class CreateEditTaskPage {
  taskName: string = '';

  constructor(private router: Router) { }

  saveTask() {
    try {
      // Lee las tareas del localStorage, si no existen inicializa como un array vacío
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      // Añade la nueva tarea
      tasks.push({ task_name: this.taskName });
      // Guarda las tareas actualizadas en localStorage
      localStorage.setItem('tasks', JSON.stringify(tasks));
      // Navega de vuelta a la página de inicio
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error saving task to localStorage:', error);
    }
  }
}

