import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PROJECTS } from '../../data/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects = PROJECTS;

}