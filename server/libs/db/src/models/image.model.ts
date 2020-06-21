import { prop, Ref, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Image {
  @ApiProperty({ description: '标题' })
  @prop()
  title: string;

  @ApiProperty({ description: '描述' })
  @prop()
  description: string;

  @ApiProperty({ description: '用户' })
  @prop({ ref: 'User' })
  user: Ref<User>;

  @ApiProperty({ description: '图片' })
  @prop()
  images: [];

  @ApiProperty({ description: '浏览量' })
  @prop()
  views: number;

  @ApiProperty({ description: '标签' })
  @prop()
  tag: number;
}
