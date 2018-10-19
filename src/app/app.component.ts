import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monblog';

/* class Post {
      title : string;
      content: string;
      loveIts: number;
      created_at: Date;

      constructor(x:string,content:string,loveIts:number, created_at:Date) {
        created_at= new Date();
      } */



  posts = [
    {
      title : 'ce cours sur Angular',
      content: 'ce cours est très bien fait ce cours est très bien fait ce cours est très bien fait ce cours est très bien fait ce cours est très bien fait ce cours est très bien fait ce cours est très bien fait ce cours est très bien fait '
      loveIts:  0
      created_at: new Date()
    },
    {
      title : 'courbe d apprentissage d Angular',
      content: 'la courbe d apprentissage d Angular est longue la courbe d apprentissage d Angular est longue la courbe d apprentissage d Angular est longue la courbe d apprentissage d Angular est longue la courbe d apprentissage d Angular est longue la courbe d apprentissage d Angular est longue la courbe d apprentissage d Angular est longue '
      loveIts:  -5
      created_at: new Date('2018-01-01T12:00:00')
    },
    {
      title : 'apprentissage par la pratique',
      content: 'c compliqué mais c le top'
      loveIts:  3
      created_at: new Date('2018-03-06T15:30:00')
    }
  ];

}
