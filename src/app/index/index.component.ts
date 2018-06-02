import { ProductService } from '../../../product.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  products: any;

  constructor(private http: HttpClient, private service: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.service.getProducts().subscribe(res => {
      this.products = res;
    });
  }
}