import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../task.entity';
import { UsersService } from 'src/users/service/users.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
    private usersService: UsersService, 
  ) {}

  async findAll(userId: number): Promise<Task[]> {
    return this.tasksRepository.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }

  async findOne(id: number): Promise<Task> {
    return this.tasksRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  async create(userId: number, task: Partial<Task>): Promise<Task> { 
    const user = await this.usersService.findOneId(userId); 
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const newTask = this.tasksRepository.create({
      ...task,
      user,
    });
    return this.tasksRepository.save(newTask);
  }

  async update(id: number, task: Partial<Task>): Promise<Task> {
    await this.tasksRepository.update(id, task);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
