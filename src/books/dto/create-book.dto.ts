export class CreateBookDto {
  readonly title: string;
  readonly author: string;
  readonly genres: string[];
  readonly year?: number;
  readonly description?: string;
  readonly coverImage?: string;
  readonly rating?: number;
}
