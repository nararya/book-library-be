import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  genres: string[];

  @Prop()
  year: number;

  @Prop()
  description: string;

  @Prop()
  coverImage: string;

  @Prop({ min: 1, max: 5 })
  rating: number;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);

export type BooksDocument = HydratedDocument<Book>;
