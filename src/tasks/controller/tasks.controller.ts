import { Controller, Get, Post, Body, Param, Put, Delete, Req, UseGuards } from '@nestjs/common';
import { Task } from '../task.entity';
import { TasksService } from '../service/tasks.service';
import {JwtAuthGuard} from '../../auth/jwt.authguard'
import { Request } from 'express';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() request: Request ) {
    console.log("user", request.user)
    const userId = request.user?.userId;
    return this.tasksService.findAll(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.tasksService.findOne(id);
  }

  @Post()
  async create(@Body() body: { userId: number; title: string; description: string }) {
    const { userId, title, description } = body;
    const task: Partial<Task> = { title, description };
    return this.tasksService.create(userId, task);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: Partial<Task>) {
    return this.tasksService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.tasksService.remove(id);
  }
}
