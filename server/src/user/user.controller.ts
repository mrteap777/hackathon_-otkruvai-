import { Controller, Post, Body, HttpException, HttpStatus, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { hash } from 'bcrypt';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get() // Обработчик GET-запроса по пути /users
  findAll() {
    return 'This will return all users'; // Ваша логика для получения всех пользователей
  }

  @Post('register')
  async register(@Body() userData: User): Promise<string> {
    try {
      const existingUser = await this.userService.findByUsername(userData.username);

      if (existingUser) {
        throw new HttpException('Username already exists', HttpStatus.CONFLICT);
      }

      const hashedPassword = await hash(userData.password, 10);
      const newUser: User = { ...userData, password: hashedPassword };

      await this.userService.create(newUser);
      return 'User registered successfully';
    } catch (error) {
      throw new HttpException('Registration failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
