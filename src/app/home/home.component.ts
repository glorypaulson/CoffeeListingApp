import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';
import { Coffee } from '../card/coffe.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  coffees: Coffee[] = [];
  available: boolean[] = [];
  constructor(private coffeeService: CoffeeService) {}
  ngOnInit(): void {

    // this.coffeeService.getCoffees().subscribe((coffees) => {
    //   const availableCoffees = coffees.filter((coffee) => coffee.available);
    //   console.log(availableCoffees);
    //   for (let i = 0; i < availableCoffees.length; i++) {
    //     this.available.push(availableCoffees[i].available);
    //   }
    // });


    // this.coffeeService.getCoffees().pipe(
    //   map(coffees => coffees.map(coffee => coffee.available))
    // ).subscribe(availableValues => {
    //   // availableValues is an array containing the 'available' property of each coffee object
    //   console.log(availableValues);
    // });

  }
}
