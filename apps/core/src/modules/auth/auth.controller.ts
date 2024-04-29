import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './auth-dto';
import { AuthService } from './auth.service';

@Controller('auth/admin')
@ApiTags('Auth')
export class AuthAdminController {
  constructor(private readonly authservice: AuthService) {}

  @Post('login')
  @HttpCode(200)
  @ApiBody({ type: LoginDto })
  login(@Body() loginInput: LoginDto) {
    return this.authservice.loginAdmin(loginInput);
  }
}


@Controller('auth/agent')
@ApiTags('Auth')
export class AuthAgentController {
  constructor(private readonly authservice: AuthService) {}

  @Post('login')
  @HttpCode(200)
  @ApiBody({ type: LoginDto })
  login(@Body() loginInput: LoginDto) {
    return this.authservice.loginAgent(loginInput);
  }
}

