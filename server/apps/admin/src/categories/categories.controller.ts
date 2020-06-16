import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Category } from '@libs/db/models/category.mode';
import { InjectModel } from 'nestjs-typegoose';
import {} from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Category,
})

@Controller('categories')
@ApiTags('分类')
export class CategoriesController {
  constructor(@InjectModel(Category) private readonly model) {}
}
