import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strategies',
})
export class StrategyPipe implements PipeTransform {
  transform(strategy: any): any {
    if (strategy === 0) {
      return 'Read textbook, watch videos, mindmap';
    } else if (strategy === 1) {
      return 'Flashcards, read aloud, repeatedly write';
    } else if (strategy === 2) {
      return 'Answer practice questions, test conditions';
    } else if (strategy === 3) {
      return 'Great work -continue to revise this content';
    }
  }
}
