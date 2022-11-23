import { Module } from '@nestjs/common';
import { LoggerModule } from 'src/logger/logger.module';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  imports: [LoggerModule]
})
export class CatsModule {}
