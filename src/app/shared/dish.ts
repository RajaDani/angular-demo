import { Comment } from './comments';

export class Dish {
  'id': string;
  'name': string;
  'image': string;
  'category': string;
  'featured': boolean;
  'label': string;
  'price': string;
  'comments': Comment[];
  'description': string;
}
