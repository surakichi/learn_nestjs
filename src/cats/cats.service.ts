import { Injectable } from '@nestjs/common';
import { MyLogger } from 'src/logger/logger.service';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  constructor(private myLogger: MyLogger) {
    this.myLogger.setContext('CatsService')
  }

  create(cat: Cat) {
    this.cats.push(cat);
  }
  findOne(id: number): Cat {
    return this.cats.at(id);
  }
  findAll(): Cat[] {
    this.myLogger.warn('Warn!! about to return cats')
    return this.cats;
  }
}

// @Injectable()
// export class HttpService<T> {
//   constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {}
//   temp() {
//     return this.httpClient;
//   }
// }
