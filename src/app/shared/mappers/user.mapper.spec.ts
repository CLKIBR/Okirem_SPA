import { mapUserDtoToUser, mapUserToUserDto } from "./user.mapper";
import { UserDto } from "../dto/user.dto";

// Mock data
describe("User Mapper", () => {
  const userDto: UserDto = {
    id: "1",
    name: "Test User",
    email: "test@example.com",
  };

  const user = {
    id: "1",
    fullName: "Test User",
    email: "test@example.com",
  };

  it("should map UserDto to User", () => {
    const result = mapUserDtoToUser(userDto);
    expect(result).toEqual(user);
  });

  it("should map User to UserDto", () => {
    const result = mapUserToUserDto(user);
    expect(result).toEqual(userDto);
  });
});
