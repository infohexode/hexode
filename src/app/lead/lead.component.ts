import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadService } from '../lead.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css'],
})
export class LeadComponent implements OnInit {
  lead: any;

  constructor(
    private route: ActivatedRoute,
    private leadService: LeadService,
    private router: Router,
    private titleService: Title,
    private sharedService: SharedService,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.leadService.getLead(id).subscribe(response => {
        console.log(response);
        this.lead = response['data'];
console.log(this.lead);
        this.titleService.setTitle(this.lead[0].Name + this.sharedService.blogTitle);
       
      });
    });
  }
}
