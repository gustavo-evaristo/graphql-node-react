import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from '../models/User'
import crypto from 'crypto'
import { CreateUserInput } from "../inputs/create-user-input";

@Resolver()
export class UserResolver {
  private data: User[] = []

  @Query(() => [User])
  async users() {
    return this.data
  }
  
  @Mutation(() => User)
  async createUser(@Arg('data') data: CreateUserInput) {
    const { name } = data;

    const user = { name, id: crypto.randomUUID()}

    this.data.push(user)

    return user;

  }
} 