import * as Joi from 'joi';

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export const createCatSchema = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number(),
  breed: Joi.string(),
});

// Need Request
// {
//   "name": "kuro",
//   "age": 24,
//   "breed": "Myao"
// }
