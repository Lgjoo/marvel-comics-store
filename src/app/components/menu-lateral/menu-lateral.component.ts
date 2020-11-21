import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  @Input() aberto: boolean;
  @Input() lado: string;

  constructor() { }

  ngOnInit(): void {
  }

}
