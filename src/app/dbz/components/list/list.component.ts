import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListDbzComponent {

  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10000
  }]

  onDeleteCharacter(id?: string): void {

    if(!id) return

    this.onDeleteCharacterById.emit(id)
  }
}
