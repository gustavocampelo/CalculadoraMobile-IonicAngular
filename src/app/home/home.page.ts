import { Component } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor = '0';
  valorVelho = '0';

  ultimoOperador = 'x';
  prontoProNovoInput = true;
  numberGroups = [
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, 'Limpar', '/', '=']
  ];

  onButtonPress(symbol) {
    console.log(symbol);

    if (isNumber(symbol)) {
      console.log('é um número');
      if (this.prontoProNovoInput)
        this.valor = '' + symbol;
      else
        this.valor += '' + symbol;
      this.prontoProNovoInput = false;
    }
    else if (symbol === 'Limpar') {
      this.valor = '0';
      this.prontoProNovoInput = true;
    }
    else if (symbol === '=') {
      if (this.ultimoOperador === 'x')
        this.valor = '' + (parseInt(this.valorVelho) * parseInt(this.valor));
      else if (this.ultimoOperador === '-')
        this.valor = '' + (parseInt(this.valorVelho) - parseInt(this.valor));
      else if (this.ultimoOperador === '+')
        this.valor = '' + (parseInt(this.valorVelho) + parseInt(this.valor));
      else if (this.ultimoOperador === '/')
        this.valor = '' + (parseInt(this.valorVelho) / parseInt(this.valor));
      this.prontoProNovoInput = true;
    }
    else { 
      this.prontoProNovoInput = true;
      this.valorVelho = this.valor;
      this.ultimoOperador = symbol;
    }
  }
}