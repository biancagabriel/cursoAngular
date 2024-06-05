import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Bianca';
  public age=28;
  public condition = this.age > 1 ? 'teste ' : 'teste 2';
  public isDesabled = true;
  //  public srcValue = 
  // 'https://devbiagabriel.wordpress.com/wp-content/uploads/2013/03/bia.jpg?w=640';
  public isTextDecoration = this.age >=28 ? 'underline' : 'none';
  public sum(){
    return this.age++;
  }
  public sub(){
    return this.age--;
  }
  public onKeyDown(event: Event){
  return console.log(event);
  } 
  public onMouseMove(event : MouseEvent){
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }
}
