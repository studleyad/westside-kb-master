import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects';
import { ProjectDetailService } from '../../services/project-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  projects: Project[];
  dataService: ProjectDetailService;
  

  constructor(private projectDetailService: ProjectDetailService, private route: ActivatedRoute ) { 
    this.dataService = this.projectDetailService;
  }
  
  ngOnInit() {
    this.getProjectDetails();
    
  }

  getProjectDetails() {
    let detailId = this.route.snapshot.params.id;
    this.projects = this.dataService.projects.slice(detailId - 1, detailId);
    console.log(detailId);
  }

}
