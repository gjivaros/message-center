import { ApiProperty } from '@nestjs/swagger';

export class AgentCreatedBy {
  @ApiProperty()
  id: string;

  @ApiProperty()
  username: string;
}

export class CreateAgentDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

}
