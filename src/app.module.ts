import { Module } from '@nestjs/common';
import { BibleVerseService } from './bible-verse/bible-verse.service';
import { BibleVerseController } from './bible-verse/bible-verse.controller';

@Module({
  imports: [],
  controllers: [ BibleVerseController],
  providers: [ BibleVerseService],
})
export class AppModule {}
