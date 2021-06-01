import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem('currentUser')!);


  constructor(private router: Router,private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  logout(){    
    localStorage.clear();
    this.currentUser = ""
    this.router.navigate(['/Home'], { relativeTo: this.activatedRoute })          
  }
}
