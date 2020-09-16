import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  constructor() { }

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  ngOnInit(): void {
  }

}
