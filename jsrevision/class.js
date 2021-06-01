class human {
  gender = "male";
}
class person extends human {
  name = "max";
  printname = () => {
    console.log(this.name);
  };
}

let person = new person();
person.name = "ansh";
person.printname();
