### Front-end Questions

1. Explain the what's similar & difference between `cookie` / `localStorage` / `sessionStorage`.
- `cookie` is able to access by browser and server but `localStorage` and `sessionStorage` are able to access by browser only.
- `cookie` has a lot of configuration but `localStorage` and `sessionStorage` have nothing
- `sessionStorage` is similar to `localStorage` but when close a tab it will disappear
- `localStorage` is similar to `sessionStorage` but it will stay forever even we close a tab or browser.

2. Today React have hooks. Do we still need a class component? If your answer is yes then which case that we still need to use class component.
- Yes, if we want to wrap a component with Error Boundary there's no way to do that with `Function Component` but I heard it's able to do that in the future when a newer React is support.

3. Briefly describe how *Virtual DOM* works.
- `Virtual DOM` is a way to representing the DOM actually produced by modern frontend framework e.g. `React` and `Vue`
- `Virtual DOM` is much faster than the DOM they has mechanic to compare which element need to be update then sync to the DOM

4. Consider this React's components tree
```
Apps > ComponentA > ComponentB > ComponentC > ComponentD > ComponentE
```

If we have a state at `Apps` component, and `ComponentE` component want to access that state value. How do you implements this?
- Pass state as a props into ComponentA > ComponentB > ComponentC > ComponentD and ComponentE then it will get a state behaving like a props in componentE.
- Normally if I want to drill down too deep I would pick a global state (e.g. context API or any others) rather than pass state as a props because it's better for development<br/> if a state is complex then someone with no experience on your code come to debug that props in ComponentE they need to do bottom-up debugging. That's why I think a global state is easier to understand.

5. What different between using `relative` / `absolute` / `fixed` to position the element.
- `relative` is displaying like static but it's able to set `z-index`, `top`, `right`, `bottom` and `left`.
- `absolute` is not display in the normal position it stick to a closest "relative" element<br/> and it's able to set `z-index`, `top`, `right`, `bottom` and `left`.
- `fixed` is able to set `z-index`, `top`, `right`, `bottom` and `left` also strick to a root element

6. Explain the different between using `callback` / `Promise` / `async await`. When to use and when not to.
- `callback` is different with the rest about this one have to send a callback into a function for execution.
    - When to use
        - There is a one function after `callback` execution
    - When not to
        - There is a lot of lines that need to execute after `callback` it's like we're going to create callback hell in this case it's hard to read also debugging.
        - I want to execute more than a one function at the same time I would pick `Promise` because `Promise.all()` could help in this case.
- `Promise` it's a better version of `callback` it's reduce a pain point about `callback` hell easier to read and debugging.
    - When to use
        - I want to execute more than one function at the same time <br/> e.g. `Promise.all()`, `Promise.allSettled()`
        - There's a few lines subsequently
    - When not to
        - For me when I handle error with `.catch()` it should be `try..catch` with `async await` instead because it also handle error everything in that function imagine if we have two async function we have to add `.catch()` to those two function.
- `async await` is similar to `Promise` but it doesn't need to chain if we want a response just use `await` after variable declaration also different in error handling this one with `try..catch` instead of `.catch()`
    - When to use
        - When handle error in a big function I would handle with `try..catch` rather than `.catch()` but just in case it's not a better way to use, it just an alternative.

            ```
            async function hello() {
                try {
                    await promiseFunctionA();
                    await promiseFunctionB();
                    nonPromiseFunctionC();
                } catch (err) {
                    console.log(error);
                }
            }
            ```
    - When not to
        - A single promise function doesn't need to add await I found a lot of developer use it. I cannot understand why they use `await` in this case.

            ```
                async function asyncFunction() {
                    return await something();
                }
            ```
