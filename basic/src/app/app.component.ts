import { Component, ViewChild, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ArticleService } from './article.service';
import { Article } from './article';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basic';
  api = environment.apiUrl;
  keyword = '';

  // articles = this.articleService.articles;
  articles: Article[] = [];

  @ViewChild('searchBox', { static: true }) searchBox: SearchBoxComponent;

  constructor(private articleService: ArticleService) {

  }

  ngOnInit(): void {
    this.articleService.queryArticle().subscribe(data => {
      console.log(data);
      this.articles = data.articles;
    });

    this.articleService.queryArticleV2().subscribe(data => {
      this.articles = data;
    });
  }

  doSearch(keyword: string) {
    this.keyword = keyword;
  }
}
