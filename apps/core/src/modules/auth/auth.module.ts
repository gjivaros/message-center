import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

import { JwtModule } from '@nestjs/jwt';

import { Constants } from '@app/contants';
import { AdminModule } from '../admin/admin.module';
import { AgentModule } from '../agent/agent.module';
import { UserModule } from '../user/user.module';
import { AuthAdminController, AuthAgentController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
    AgentModule,
    PassportModule,
    AdminModule,
    UserModule,
    JwtModule.register({
      secret: Constants.JWT_SECRET,
      signOptions: { expiresIn: Constants.JWT_TTL },
    }),
  ],
  exports: [AuthService],
  controllers: [AuthAdminController,AuthAgentController ],
})
export class AuthModule {}
