import { DataSourceService } from '@app/data-source';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRole } from '@prisma/client';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private readonly datasource: DataSourceService) {}

  create(createUserDto: UserDto) {
    return this.datasource.user.create({ data: {...createUserDto, role: 'user'} });
  }

  findAll() {
    return this.datasource.user.findMany({where:{role: 'user'}});
  }

  async findOne(id: {role: UserRole, username: string}) {
    const user = await this.datasource.user.findUnique({
      where: {username_role: id},
    });

    if (!user) {
      throw new BadRequestException({
        code: 'NOT_FOUND',
        message: `user ${id} not found`,
      });
    }

    return user;
  }


  findByUsername(id:{role: UserRole, username: string}){
    return this.datasource.user.findUnique({where:{username_role:id}})
  }

  remove(id: string) {
    return this.datasource.user.delete({
      where: { id },
    });
  }
}
