# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2 
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3
  1. Item 3a
  1. Item 3b

## Images

![This is a alt text.](../images/sample.png "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

```
let message = 'Hello world';
alert(message);
```

## Inline code

This web site is using `markedjs/marked`.

https://zhuanlan.zhihu.com/p/59412540

希腊字母
`$\Gamma$、$\iota$、$\sigma$、$\phi$、$\upsilon$、$\Pi$、$\Bbbk$、$\heartsuit$、$\int$、$\oint$`
$\Gamma$、$\iota$、$\sigma$、$\phi$、$\upsilon$、$\Pi$、$\Bbbk$、$\heartsuit$、$\int$、$\oint$

三角函数、对数、指数
`$\tan$、$\sin$、$\cos$、$\lg$、$\arcsin$、$\arctan$、$\min$、$\max$、$\exp$、$\log$`
$\tan$、$\sin$、$\cos$、$\lg$、$\arcsin$、$\arctan$、$\min$、$\max$、$\exp$、$\log$
运算符
`$+$、$-$、$=$、$>$、$<$、$\times$、$\div$、$\equiv$、$\leq$、$\geq$、$\neq$`
$+$、$-$、$=$、$>$、$<$、$\times$、$\div$、$\equiv$、$\leq$、$\geq$、$\neq$

集合符号
`$\cup$、$\cap$、$\in$、$\notin$、$\ni$、$\subset$、$\subseteq$、$\supset$、$\supseteq$、$\N$、$\Z$、$\R$、$\R$、$\infty$`
$\cup$、$\cap$、$\in$、$\notin$、$\ni$、$\subset$、$\subseteq$、$\supset$、$\supseteq$、$\N$、$\Z$、$\R$、$\R$、$\infty$
内联输出与块状输出
`函数式：$f(x)=\frac{P(x)}{Q(x)}$`
函数式：$f(x)=\frac{P(x)}{Q(x)}$
`$$f(x)=\frac{P(x)}{Q(x)}$$`
$$f(x)=\frac{P(x)}{Q(x)}$$

简单的四则运算
`$2x - 5y =  8$  `
`$3x + 9y =  -12$`
`$7x \times 2y \neq 3z$`
$2x - 5y =  8$  
$3x + 9y =  -12$
$7x \times 2y \neq 3z$

指数输出
`$x^3+x^9+x^y$`
$x^3+x^9+x^y$
n次方根输出
`$\sqrt{3x-1}+\sqrt[5]{2y^5-4}$`
$\sqrt{3x-1}+\sqrt[5]{2y^5-4}$
三角公式
`$$\cos (2\theta) = \cos^2 \theta - \sin^2 \theta$$`
$$\cos (2\theta) = \cos^2 \theta - \sin^2 \theta$$
输出分数
`$$\frac{x}{2y} +\frac{x-y}{x+y} $$`
$$\frac{x}{2y} +\frac{x-y}{x+y} $$
求和输出
`$$\sum_{n=1}^\infty k$$`
$$\sum_{n=1}^\infty k$$

极限的输出
`$$\lim\limits_{x \to \infty} \exp(-x) = 0$$`
$$\lim\limits_{x \to \infty} \exp(-x) = 0$$
阶乘的输出
`$$\frac{n!}{k!(n-k)!} = \binom{n}{k}$$`
$$\frac{n!}{k!(n-k)!} = \binom{n}{k}$$

输出矩阵
```
$$
  \begin{matrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{matrix} 
$$
```
$$
  \begin{matrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{matrix} 
$$

复杂数学公式
```
$$
X(m,n)=
\begin{cases}
x(n),\\
x(n-1),\\
x(n+1)
\end{cases}
$$
```
$$
X(m,n)=
\begin{cases}
x(n),\\
x(n-1),\\
x(n+1)
\end{cases}
$$