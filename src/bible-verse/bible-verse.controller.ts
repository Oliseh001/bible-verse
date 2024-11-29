import { Controller, Get } from '@nestjs/common';
import { BibleVerseService } from './bible-verse.service';

@Controller('bible-verse')
export class BibleVerseController {
    constructor(private readonly bibleVerseService: BibleVerseService) {}
    
    @Get('verse')
    async getBibleVerse(): Promise<string> {
      return this.bibleVerseService.getRandombibleverse();
    };

    @Get('quote')
    async getQuote(): Promise<string> {
      return this.bibleVerseService.getRandomQuote();
    };
}
