import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  findProfile() {
    return this.prismaService.user.findMany({
      include: {
        experience: true,
        project: true,
      },
    });
  }
}
