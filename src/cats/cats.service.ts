import { Inject, Injectable, Optional } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }
  findOne(id: number): Cat {
    return this.cats.at(id);
  }
  findAll(): Cat[] {
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
