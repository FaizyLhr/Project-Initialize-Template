import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-declair-input',
  templateUrl: './declair-input.component.html',
  styleUrls: ['./declair-input.component.css']
})
export class DeclairInputComponent implements OnInit {

  cars = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' },
    { id: 4, name: 'Project 4' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
