import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './schema/order.schema';
import { Model } from 'mongoose';
import { OrderGateway } from './order.gateway';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
    private orderGateway: OrderGateway,
  ) {}

  async getAll(): Promise<Order[]> {
    return this.orderModel.find({});
  }

  async create(orderData: Order): Promise<Order> {
    const newOrder = await this.orderModel.create(orderData);
    await newOrder.save();
    this.orderGateway.notify('order-added', newOrder);

    return newOrder;
  }
}
