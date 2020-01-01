import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  goals = ['goal1','goal2'];
  constructor() { }
  getGoals(){
    return this.goals;
  }
}