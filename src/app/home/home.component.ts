import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private coffeeService: CoffeeService) {}
  ngOnInit(): void {

  }
}
