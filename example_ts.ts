import autobind from './autobind'

export class Counter {
   
   count = 0;
      
   @autobind
   increment () {
      this.count = this.count + 1
   }
   
}