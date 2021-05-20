import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ARTICLES } from '../mock-articles';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-article-lists',
  templateUrl: './article-lists.component.html',
  styleUrls: ['./article-lists.component.css'],
})
export class ArticleListsComponent implements OnInit {
  articles: Article[] = [];
  title = 'Blogs';

  constructor(
    private articleService: ArticleService,
    private titleService: Title,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title + this.sharedService.blogTitle);
    this.getArticles();
  }

  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe((articles) => (this.articles = articles));
  }
}
