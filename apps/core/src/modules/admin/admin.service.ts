import { DataSourceService } from '@app/data-source';
import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './admin.dto';

@Injectable()
export class AdminService {
  constructor(private readonly datasource: DataSourceService) {}

  create(inputs: CreateAdminDto) {
    return this.datasource.user.create({ data: {...inputs, role: 'admin'} });
  }

  findAll() {
    return this.datasource.user.findMany({where:{role: 'admin'}});
  }

  remove(id: string) {
    return this.datasource.user.delete({ where: { id, role: 'admin' } });
  }
}
