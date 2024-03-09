import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from './coffe.model';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  coffees: Coffee[] | undefined;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.getCoffees();
  }

  getCoffees(): void {
    this.coffeeService.getCoffees()
      .subscribe(coffees => this.coffees = coffees);
  }

}
