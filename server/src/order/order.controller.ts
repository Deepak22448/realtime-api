import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './schema/order.schema';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async findAll(): Promise<Order[]> {
    return this.orderService.getAll();
  }

  @Post()
  async create(@Body() orderData: Order): Promise<Order> {
    return this.orderService.create(orderData);
  }
}
