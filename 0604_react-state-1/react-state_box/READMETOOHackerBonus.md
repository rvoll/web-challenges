# React State: Box

## Hacker Bonus

Check the console and pay attention to the logged value of `isActive`. You will notice, that `console.log()` doesn't log the value you set with the `set` function one line before. If you set `true` it will log `false` and vice versa. This is not a bug, but the fundamental way how state in React works.

Can you explain why this happens?

> I would say, in the position of the original `console.log`, the value is still the previous one, i.e. either the deafault value - upon loading the page - or the output of the previous toggle. The **new value** only shows up after the function `handleClick()` has been carried out, i.e. either **before the return statement** or **before the next call of the handle function** when the page is rerendered.
