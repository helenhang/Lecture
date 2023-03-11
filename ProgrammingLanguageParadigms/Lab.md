question:
1. map vs flatMap
2. flatMap
3. map2
4. why I can't use for-comprehension in map2
```scala
   def map2[E,A,B,C](a:Partial[E,A],b:Partial[E,B], f:(A,B)=>C):Partial[E,C] = {
    flatMap (a, (aa:A) => map(b, (bb:B)=>f(aa,bb)))}
```
```scala
  def map2[E,A,B,C](a:Partial[E,A],b:Partial[E,B], f:(A,B)=>C):Partial[E,C] = {
    for{
        aa<-a
        bb<-b
    }
  }
```

how to use unfold?
for example, in problem 3 and problem4