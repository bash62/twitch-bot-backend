import { TwitchApiInput } from './twitchApi.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTwitchApiInput extends PartialType(TwitchApiInput) {
  id: number;
}
