import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items$: Observable<Cart[]>;

  constructor(private readonly storeService: StoreService) {}

  ngOnInit(): void {
    this.items$ = this.storeService.getItems();
  }

  async addToCart(id: string): Promise<void> {
    console.log(id);
    await this.storeService.addToCart(id);
  }
}
