import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: typeof Product,
  ) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    // 👇 Corrigido: cast para evitar conflito de tipos com o model do Sequelize
    return this.productModel.create(createProductDto as any);
  }

  findAll(): Promise<Product[]> {
    return this.productModel.findAll();
  }

  // 👇 Corrigido: aceita retorno null para não quebrar o TypeScript
  findOne(id: string): Promise<Product | null> {
    return this.productModel.findOne({
      where: { id },
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);
    if (!product) throw new Error('Produto não encontrado');
    await product.update(updateProductDto);
    return product;
  }

  async remove(id: string): Promise<void> {
    const product = await this.findOne(id);
    if (!product) throw new Error('Produto não encontrado');
    await product.destroy();
  }

  // 🧪 Método do roteiro 6.a.1 - Testes com TDD
  async findByCriteria(criteria: any): Promise<Product[]> {
    return this.productModel.findAll({
      where: criteria,
    });
  }
}
