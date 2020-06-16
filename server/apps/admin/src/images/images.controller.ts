import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Image } from '@libs/db/models/image.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Image,
})

@Controller('images')
@ApiTags('图片')
export class ImagesController {
  constructor(@InjectModel(Image) private readonly model) {}
}
