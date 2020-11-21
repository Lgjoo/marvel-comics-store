import { Component } from '@angular/core';
import { VariablesService } from './services/variables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public variables: VariablesService) {}
}
