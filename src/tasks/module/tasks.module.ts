import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from '../controller/tasks.controller';
import { Task } from '../task.entity';
import { UsersModule } from 'src/users/module/users.module';
import { TasksService } from '../service/tasks.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]),
    UsersModule, 
  ],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
