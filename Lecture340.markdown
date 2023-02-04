# CMPT340 programming language Paradigms

02: Health Sciences GB03
04: Edwards 18
02: 20:30 - 11:20 am MWF
04: 1:30 pm – 2:20 pm MWF
 

Lab: T02, T04, T06, T08, T10: Thorv S320  
 	T12: Thorv S311
T02: 11:30-12:20 M : Lauresa Stilling: Nice, easy going
T04: 12:30-1:20 M
T06: 9:30 am – 10:20am W 
T08: 3:30-4:2-pm W
T10: 12:3-pm – 1:20 F
T12: 11:30am – 12:20M
Victoria Guenter: GOOD
## Lecture Feb 3
Error and exception
Basic idea:
•	Can represent failures and exceptions with ordinary values
•	Can write higher-order functions that abstract out common patterns of error handiling and recovery
•	Advantages
    o	Safer and retains referential 
Plan
•	Recreate option and either type
•	Exception break RT and introduce context dependence.
•	They don’t work for higher-order functions
    o	HOF cannot be avare of exceptions that could be raised by their arguments

Benefit of exeption

* They allow us to :
    - paritial function
    - posibility 1
      - return a bogus value of type Double
        - always return xs.sum / xs.length, which becomess 0.0 / 0 (i.e., Double.NaN) when iinput is empty
        - return some sentinel value
      - problems with this
    - posibility 2
      - force cller to supply argument that tells function what to do when it can't handle input
      - This turns mean into a toal function, but
        - mmediate callers need direct knowlege of handling underd case
          - limits caller to returning Double
          - what if the larger computation should be aborting instead? or doing something else?
          - caller把如果是exception要做什么的function也传进来

###solution: option data type
![picture 1](images/45fc76441d9cdf0cb89e5e3ec10882cef91e81d0441e150c4bd7337af945aa6f.png)  

- represent-explicitly- in return type that function may not always have an answer: Defer to the caller for error-handling
- has tow cases: some, for when it is definded; None, for when it is underind
- can be used for mean as follows
### sentinel vs. option type
### usage patterns for option
- can factor out common patterns of error handling via higher-order functions
  - frees us from writing boiler-plate that comes with exception-handling code
### basic functions on option
- many List functions have their analogs for option:
  - ![picture 2](images/64205d221ba2be7df4def5124e1c5303d85f63359707fa3e97ecf93a5642c9c7.png)  
**？？？**
default means lazy evaluate