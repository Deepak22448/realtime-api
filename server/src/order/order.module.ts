import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schema/order.schema';
import { OrderGateway } from './order.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ schema: OrderSchema, name: Order.name }]),
  ],
  controllers: [OrderController],
  providers: [OrderService, OrderGateway],
})
export class OrderModule {}
