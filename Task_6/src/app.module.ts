import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';

@Module({
  providers: [],
  controllers: [MovieController],
  imports: [],
  exports: [],
})
export class AppModule {
  constructor() {
    console.log(`This is app module`);
  }
}

