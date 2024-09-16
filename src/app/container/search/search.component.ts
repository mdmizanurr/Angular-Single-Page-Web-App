import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchText : string = '';

  @ViewChild("searchInput") searchInputEl : ElementRef

  updateSearchText(){
    // this.searchText = event.target.value;
    
    this.searchText = this.searchInputEl.nativeElement.value ;
    this.searchTextChanged.emit(this.searchText);

  }

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    //this.searchTextChanged.emit(this.searchText);
  }

  activeButton(event: any):  void{
    alert();
  }


}
