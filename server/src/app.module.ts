import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './order/order.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL), OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
