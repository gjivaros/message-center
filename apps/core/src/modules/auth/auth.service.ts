import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiProperty } from '@nestjs/swagger';
import { comparePassword } from '../../helpers/password-helpers';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateAgent({ username, password }: LoginInput) {
    try {
      const agent = await this.userService.findByUsername({username, role: 'agent'});

      if (!agent) {
        throw new UnauthorizedException({
          code: 'INVALID_CREDENTIALD',
          message: 'username or password incorrect',
        });
      }

      if (await comparePassword(password, agent.password)) {
        return agent;
      }

      throw new UnauthorizedException({
        code: 'INVALID_CREDENTIALD',
        message: 'username or password incorrect',
      });
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException({
        code: 'INVALID_CREDENTIALD',
        message: 'username or password incorrect',
      });
    }
  }

  async validateAdmin({ username, password }: LoginInput) {
    try {
      const admin = await this.userService.findByUsername({username, role: 'admin'});

      if (!admin) {
        throw new UnauthorizedException({
          code: 'INVALID_CREDENTIALD',
          message: 'username or password incorrect',
        });
      }

      if (await comparePassword(password, admin.password)) {
        return admin;
      }

      throw new UnauthorizedException({
        code: 'INVALID_CREDENTIALD',
        message: 'username or password incorrect',
      });
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException({
        code: 'INVALID_CREDENTIALD',
        message: 'username or password incorrect',
      });
    }
  }

  async loginAgent(agent: LoginInput): Promise<LoginSuccess | LoginFaild> {
    const payload = await this.validateAgent(agent);

    if (payload) {
      return {
        id: payload.id,
        username: payload.username,
        token: this.jwtService.sign({
          username: payload.username,
          id: payload.id,
        }),
      };
    }

    return {
      message: 'Unauthorized',
      statusCode: 401,
    };
  }

  async loginAdmin(admin: LoginInput): Promise<LoginSuccess | LoginFaild> {
    const payload = await this.validateAdmin(admin);

    if (payload) {
      return {
        id: payload.id,
        username: payload.username,
        token: this.jwtService.sign({
          username: payload.username,
          id: payload.id,
        }),
      };
    }

    return {
      message: 'Unauthorized',
      statusCode: 401,
    };
  }

  async validateUser({username, password}:{username:string, password:string}){
    const admin = await this.userService.findByUsername({username, role: 'admin'});

    if(admin) return this.validateAdmin({username, password})
      return this.validateAgent({username, password})
  }

  verifyToken(token: string) {
    try {
      const user = this.jwtService.verify(token);
      console.log('user', user);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export class LoginInput {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}

export interface LoginSuccess {
  id: string;
  username: string;
  token: string;
}

export interface LoginFaild {
  statusCode: 401;
  message: 'Unauthorized';
}
