import { ApiProperty } from "@nestjs/swagger";
import { Canal } from "@prisma/client";

export class CreateConversationDto {
  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  text: string;

  @ApiProperty({ required: true })
  username: string;

  @ApiProperty({required: true})
  canal: Canal
}
