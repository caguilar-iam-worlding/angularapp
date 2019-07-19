import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: String;

  constructor() { }

  ngOnInit() {
  }

  onSearch(search_value: any) {
    this.search = search_value;
  }

}
