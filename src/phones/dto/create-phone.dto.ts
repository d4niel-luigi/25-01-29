import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreatePhoneDto {
  @IsString()
  @MinLength(3)
  @ApiProperty({
    example: 'NG-123'
  })
  model:string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Nokia'
  })
  brand?: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    example:400000
  })
  price: number
}
