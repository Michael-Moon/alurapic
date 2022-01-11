import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';

import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  debounce: Subject<string> = new Subject<string>();

  @Output() onTyping: EventEmitter<string> =  new EventEmitter<string>();
  @Input() value: string ='';

  constructor() { }

  ngOnInit(): void {

    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }


}
