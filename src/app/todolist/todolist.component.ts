import { Component, OnInit } from '@angular/core';
import { Item } from "../model/Item";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  items : Item[];
  creationDate: Date;
  constructor() {

    this.items = [
      new Item("Comprar limón"),
      new Item("Comprar Jabón"),
      new Item("Comprar Galleta"),
      new Item("Comprar agua")
      ];

   }
  onRemove(anItem){
this.items = this.items.filter(item => item !== anItem);
}
  
  ngOnInit() {
  }

}
