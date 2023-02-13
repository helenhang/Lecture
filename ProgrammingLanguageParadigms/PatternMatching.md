### Pattern Matching
1.  case class，自带pattern matching
2.  case 就是switch，会match all the case in sequence.
```scala
object PatternMatching extends App{
  //switch expression
  val anInteger = 55
  val order = anInteger match{
    case 1 => "first"
    case 2 => "second"
    case 3 => "third"
    case _=> anInteger + "th"
  }

  println(order)
  //PM is an expression,意思是可以produce a value

  /*
 case classes = lightweight data structures with some boilerplate
 - sensible equals and hash code
 - serialization
 - companion with apply
 - pathern matching
  */
  case class Person(name:String, age:Int)

  val bob = Person("Bob", 43)// Person.apply("Bob",43)
  val personGreetiong = bob match{
    case Person(n,a) => s"Hi, my name is $n and I am $a years old."
    case _ => "Something else"
  }

  println(personGreetiong)

  //decomstructing tuples
  val aTuple = ("Bon Jovi", "Rock")
  val bandDescription = aTuple match {
    case (band,genre) => s"$band belongs to the genre $genre"
    case _ => "I don't know what you're talking about"
  }

  //decomposing lists
  val aList = List(1,2,3)
  val listDescription = aList match {
    case List(_,2,_) => "List containing 2 on its second postion"
    case _ => "unknown list"
  }

  //if PM doesn't match anything, it will throw a MatchError
  //PM will try all cases in sequence


}
```
