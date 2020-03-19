import { IsBoolean, IsNotEmpty } from 'class-validator';

export class TodoInterface {
  id: number;

  @IsNotEmpty()
  description: string;

  @IsBoolean()
  isCompleted: boolean;
}
