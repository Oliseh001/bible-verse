import { Injectable } from '@nestjs/common';

@Injectable()
export class BibleVerseService {
    private bibleVerses: string[] = [
    "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11",
    "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. - Psalm 23:1-2",
    "I can do all things through Christ who strengthens me. - Philippians 4:13",
    "Trust in the Lord with all your heart, and lean not on your own understanding. - Proverbs 3:5",
    "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. - Isaiah 40:31",
    "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning. - Lamentations 3:22-23",
    "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go. - Joshua 1:9",
    "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28",
    "Come to me, all who are weary and burdened, and I will give you rest. - Matthew 11:28",
    "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid? - Psalm 27:1",
  ];

  private philosophicalQuotes: string[] = [
    "The unexamined life is not worth living. - Socrates",
    "Man is the measure of all things. - Protagoras",
    "Happiness is the highest good. - Aristotle",
    "I think, therefore I am. - René Descartes",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "You are not a drop in the ocean. You are the entire ocean in a drop. - Rumi",
    "What you seek is seeking you. - Rumi",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "The soul is healed by being with children. - Fyodor Dostoevsky",
    "Faith is taking the first step even when you don’t see the whole staircase. - Martin Luther King Jr.",
  ];
  
 async getRandombibleverse(): Promise<string>  {
    const randomIndex = Math.floor(Math.random() * this.bibleVerses.length);
    return this.bibleVerses[randomIndex];
  };

  async getRandomQuote(): Promise<string>  {
    const randomIndex = Math.floor(Math.random() * this.philosophicalQuotes.length);
    return this.philosophicalQuotes[randomIndex];
  };


}
