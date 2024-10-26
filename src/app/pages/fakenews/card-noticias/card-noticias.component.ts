import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-noticias',
  templateUrl: './card-noticias.component.html',
  styleUrls: ['./card-noticias.component.scss'],
})
export class CardNoticiasComponent implements OnInit {
  @Input() fakenews: any;
  constructor() { }

  ngOnInit() {}
}
