import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postTitle:string;
  @Input() postContent:string;
  @Input() postLoveIts:number;
  @Input() postCreate_at:Date;
  

  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.postLoveIts += 1;
  }
  onDontLoveIt() {
    this.postLoveIts -= 1;
  }


}
