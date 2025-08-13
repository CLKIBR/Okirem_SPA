import { UserDto } from "../dto/user.dto";

export interface User {
  id: string;
  fullName: string;
  email: string;
}

export function mapUserDtoToUser(dto: UserDto): User {
  return {
    id: dto.id,
    fullName: dto.name,
    email: dto.email,
  };
}

export function mapUserToUserDto(user: User): UserDto {
  return {
    id: user.id,
    name: user.fullName,
    email: user.email,
  };
}
