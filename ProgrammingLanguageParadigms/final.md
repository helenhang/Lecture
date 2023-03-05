### 期末考题范围

#### Generalize tails to scanRight, which is like a foldRight which returns a stream of the intermediate results
scala> Stream(1,2,3).scanRight(0)(_ + _).toList res0: List[Int] = List(6,5,3,0)
```scala
 def scanRight[B](z: B)(f: (A, => B) => B): Stream[B] =
    foldRight((z, Stream(z)))((a, p0) => {
      // p0 is passed by-name and used in by-name args in
         f and cons. So use lazy val to ensure only one
         evaluation...
      lazy val p1 = p0
      val b2 = f(a, p1._1)
      (b2, cons(b2, p1._2))
})._2

//这个期末final exam会考