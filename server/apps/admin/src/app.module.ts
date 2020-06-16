import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [DbModule, UsersModule, CategoriesModule, ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
