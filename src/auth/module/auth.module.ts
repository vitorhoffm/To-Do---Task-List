import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../service/auth.service';
import { UsersModule } from '../../users/module/users.module';
import { JwtStrategy } from '../jwt.strategy';
import { AuthController } from '../controller/auth.controller';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'pass123',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService, JwtModule], // Exporte o JwtModule aqui
})
export class AuthModule {}
