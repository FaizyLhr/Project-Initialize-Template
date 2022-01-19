import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  sidebarLgCollapse(val: number) {
    const element = document.getElementsByTagName('body')[0];
    let w = element.offsetWidth;
    if (w < 992) {
      if (element.classList.contains('sidebar-xs')) {
        element.classList.remove('sidebar-xs');
      } else {
        element.classList.add('sidebar-xs');
      }
    }
  }

  
}
