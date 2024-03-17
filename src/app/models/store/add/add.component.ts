import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  items: Cart[] = [];

  constructor(private readonly storeService: StoreService) {}

  ngOnInit(): void {
    this.items = this.storeService.cart;
  }

  minus(id: string): void {
    this.storeService.minusCart(id);
  }

  plus(id: string): void {
    this.storeService.addToCart(id);
  }
}
