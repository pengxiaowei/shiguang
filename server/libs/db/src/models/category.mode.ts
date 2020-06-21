import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Category {
  @ApiProperty({ description: '类型' })
  @prop()
  type: string;

  @ApiProperty({ description: '分类名' })
  @prop()
  name: string;

  
}
