import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

/**
 * Embora PartialType já torne todos os campos opcionais,
 * o professor manteve os campos visíveis explicitamente
 * dentro da classe UpdateProductDto por clareza.
 */
export class UpdateProductDto extends PartialType(CreateProductDto) {
  name: string;
  price: number;
  category: string;
  rating: number;
}
