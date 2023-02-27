function Cat(name) {
    this.name = name;
    this.sound = "Meow";
  }
  
  var cat = new Cat("Tom"); 
  console.log(cat.sound); 
  
  var cat2 = Cat("Tom"); 
  console.log(typeof name); 
  
  console.log(cat2 && cat2.name); 
  
  




