import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Lead } from '../lead';
import { LeadService } from '../lead.service';

import { SharedService } from '../shared.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css'],
})
export class LeadsComponent implements OnInit {
  leads: Lead[] = [];
  title = 'Blogs';

  constructor(
    private leadService: LeadService,
    private titleService: Title,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title + this.sharedService.blogTitle);
    this.getLeads();
  }

  getLeads(): void {
    this.leadService.getLeads().subscribe((leads) => (this.leads = leads));
  }
}
