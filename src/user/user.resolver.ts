import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserProfileModel } from './models/user-profile.model';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserProfileModel], {
    name: 'findProfile',
  })
  findProfile() {
    return this.userService.findProfile();
  }
}
