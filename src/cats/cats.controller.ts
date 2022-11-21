import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { RolesGuard } from '../util/roles.guard';
import { Roles } from '../util/roles.decorator';
import { CatsService } from './cats.service';
import { CreateCatDto, createCatSchema } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { JoiValidationPipe } from './dto/joi-validation.pipe';
import { LoggingInterceptor } from '../util/logging.interceptor';
import { User } from '../user.decorator';

// @UseFilters(HttpExceptionFilter)
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Roles('admin')
  @UsePipes(new JoiValidationPipe(createCatSchema))
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    // throw new ForbiddenException();
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  // example localhost:3000/cats/?limit=3
  // @Get()
  // findAll(@Query() query: ListAllEntities): string {
  //   return `This action returns all cats (limit: ${query.limit} items)`;
  // }
  @Get('user')
  async findUser(@User('firstName') firstName: string) {
    console.log(`Hello ${firstName}`);
  }

  // example localhost:3000/3 and body parameter
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }

  // example localhost:3000/3
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
