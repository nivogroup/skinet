import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/models/order';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit {
  order: IOrder;

  constructor(private route: ActivatedRoute, private ordersService: OrdersService, private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.set('@OrderDetailed', '');
   }

  ngOnInit(): void {
    this.getOrderDetailed();
  }

  getOrderDetailed() {
    this.ordersService.getOrderDetailed(+this.route.snapshot.paramMap.get('id')).subscribe(
      (order: IOrder) => {
        this.order = order;
        this.breadcrumbService.set('@OrderDetailed', `Order# ${order.id} - ${order.status}`);
      },
      (error) => { console.log(error); }
    );
  }

}
