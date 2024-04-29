import { ApiProperty } from "@nestjs/swagger";

export class InitConvertation {
  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  text: string;

  @ApiProperty({ required: true })
  username: string;
}