import { ApiProperty } from "@nestjs/swagger"

export class CreateMessageDto {

  @ApiProperty()
  conversationId: string
  
  @ApiProperty()
  text: string

}

export class UpdateMessageDto {
  @ApiProperty()
  id: string

  @ApiProperty()
  text: string
}