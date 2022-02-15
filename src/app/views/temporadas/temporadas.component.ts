import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temporadas',
  templateUrl: './temporadas.component.html',
  styleUrls: ['./temporadas.component.css']
})
export class TemporadasComponent implements OnInit {

 myInterval = 1500;
  activeSlideIndex = 0;
  slides: {image: string; text?: string}[] = [
    {image: '../../../assets/aot-s1.jpg'},
    {image: '../../../assets/aot-s2.jpg'},
    {image: '../../../assets/aot-s3.jpg'},
    {image: '../../../assets/aot-4.jpg'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
