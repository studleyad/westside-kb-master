import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects';
import { ProjectDetailService } from '../../services/project-detail.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  dataService: ProjectDetailService;
  constructor(private projectDetailService: ProjectDetailService ) { 
    this.dataService = this.projectDetailService;
  }

  ngOnInit() {
    this.projects = this.dataService.projects;
  }

}
