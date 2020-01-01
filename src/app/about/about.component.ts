import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    goals = [];
  constructor(private router: Router, private dataService: DataService) {
     this.goals = this.dataService.getGoals();
  }

  ngOnInit() {
  }

}