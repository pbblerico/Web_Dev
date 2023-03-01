import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  filteredProducts = [...products];
  currCategory = "None"
  

  share(name:string, url:string) {
    window.open(`https://telegram.me/share/url?url=Welcome, you should buy ${name} &text= on ${url}`)
  } 

  onNotify() {
    window.alert("Notify you later!")
  }

  filterByCategory() {
    if(this.currCategory === "None") {
       this.filteredProducts = this.products  
  }  else
        this.filteredProducts = this.products.filter(p => p.category === this.currCategory)
  }

  updateView(category: string) {
    this.currCategory = category;
    this.filterByCategory();
  }

  like(productId: number) {
    this.products.filter(p => p.id === productId).map(p => p.likes++);
  }

  deleteItem(productId: number) {
    this.products = this.products.filter(p => p.id != productId);
    this.filterByCategory();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/