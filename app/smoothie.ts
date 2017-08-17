class Smoothie {
  pints: number = 124;

  constructor(public name: string, public price: number, public ingredients: Array<string>){}

  takeOneDown(){
    this.pints -= 1;
    if (this.pints < 11) {
      alert("This flavor needs to be restocked.");
    };
  }
}

// var smoothies: Smoothie[] = [];
// smoothies.push(new Smoothie('Banana-rama', 5, ['banana', 'strawberry', 'mango']));
// smoothies.push(new Smoothie('Mango-agogo', 4, ['mango', 'pineapple']));
