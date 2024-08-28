import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/module/users.module';
import { TasksModule } from './tasks/module/tasks.module';
import { AuthModule } from './auth/module/auth.module';
import { User } from './users/user.entity';
import { Task } from './tasks/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [User, Task],
      synchronize: true,
    }),
    UsersModule,
    TasksModule,
    AuthModule,
  ],
})
export class AppModule {}
