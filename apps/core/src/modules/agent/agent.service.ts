import { DataSourceService } from '@app/data-source';
import { Injectable } from '@nestjs/common';
import { CreateAgentDto } from './agent.dto';

@Injectable()
export class AgentService {
  constructor(private readonly datasource: DataSourceService) {}

  create(createAgentDto: CreateAgentDto) {
    return this.datasource.user.create({
      data: {
        ...createAgentDto,
        role: 'agent'
      },
    });
  }

  findAll() {
    return this.datasource.user.findMany({where:{role: 'agent'}});
  }

  remove(id: string) {
    return this.datasource.user.delete({ where: { id, role: 'agent' } });
  }
}
