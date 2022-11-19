import { Controller, Get } from '@nestjs/common';

@Controller({ path: 'admin', host: 'admin.example.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}
