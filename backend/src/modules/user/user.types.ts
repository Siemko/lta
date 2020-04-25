import { User } from './user.entity';

export type UserPreview = Omit<User, 'password'>;
