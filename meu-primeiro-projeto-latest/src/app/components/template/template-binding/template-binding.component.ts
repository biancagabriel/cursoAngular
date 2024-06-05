import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Bianca';
  public age=28;
  public condition = this.age > 1 ? 'teste 1' : 'teste 2';
  public isDesabled = true;
  //  public srcValue = 
  // 'https://devbiagabriel.wordpress.com/wp-content/uploads/2013/03/bia.jpg?w=640';
  public isTextDecoration = this.age >=28 ? 'underline' : 'none';
  public sum(val1:number,val2:number){
    return val1 + val2;
  }
}
