import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Lead } from '../lead';
import { LeadService } from '../lead.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css'],
})
export class LeadComponent implements OnInit {
  lead: Lead = new Lead();

  constructor(
    private route: ActivatedRoute,
    private leadService: LeadService,
    private router: Router,
    private titleService: Title,
    private sharedService: SharedService,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const MobileNumber = params.MobileNumber;
      this.leadService.getLead(MobileNumber).subscribe((lead) => {
        if (lead === undefined) {
          this.router.navigateByUrl('404');
        }
        this.lead = lead;

        this.titleService.setTitle(
          this.lead.Name + this.sharedService.blogTitle
        );
        this.meta.addTags([
          { name: 'description', content: this.lead.ShortSummary },
          {
            property: 'og:title',
            content: this.lead.company_name + this.sharedService.blogTitle,
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            property: 'og:url',
            content: this.sharedService.baseURL + this.lead.MobileNumber,
          },
          {
            property: 'og:description',
            content: this.lead.Summary,
          },
          {
            property: 'og:site_name',
            content: this.sharedService.blogTitle,
          },
        ]);
      });
    });
  }
}
