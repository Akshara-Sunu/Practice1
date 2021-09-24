import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../project.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public project:any = []
//  project!: Projectser[];

  constructor(private ProjectService : ProjectService) {}

  ngOnInit() {
    this.project = this.ProjectService.getProject();
  }

}
