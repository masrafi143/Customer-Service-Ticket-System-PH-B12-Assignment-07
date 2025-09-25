
## 1. What is JSX, and why is it used?
**Ans:** 
JSX (JavaScript XML) lets us write HTML inside JavaScript.  
It helps us see code like HTML, easy for us to read.  

---

## 2. What is the difference between State and Props?
**Ans:**  
- **State**: Data inside our component. We can change it.  
- **Props**: Data that comes to us from parent. We cannot change it.  

---

## 3. What is the useState hook, and how does it work?
**Ans:** With `useState`, we can keep and change data in our component.  
It gives us:  
1. A value (current data).  
2. A function to change it.  

**Example:**
```js
const [count, setCount] = useState(0);
````

---

## 4. How can we share state between components in React?

**Ans:** We put the state in the parent and send it to children with props.
This way all of us (components) can use the same state.

---

## 5. How is event handling done in React?

**Ans:** We use camelCase like `onClick`.
We give it a function.

**Example:**

```js
<button onClick={handleClick}>Click</button>