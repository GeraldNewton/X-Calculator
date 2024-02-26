const compare = (come, top) => {
  if (come === "+" || come === "-") {
    if (top === "*" || top === "/") return true;
    else return false;
  } else if (
    (come === "*" && top === "/") ||
    (come === "/" && top === "*") ||
    (come === "/" && top === "/")
  )
    return true;
  else return false;
};

class Stack {
  constructor() {
    this.items = [];
  }
  push(data) {
    this.items.push(data);
  }
  pop() {
    if (!this.items.length) return undefined;
    this.items.pop();
  }
  top() {
    return this.items[this.items.length - 1];
  }
  length() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const resolveInput = (input) => {
  let res = [],
    ch,
    number,
    num = "",
    i;
  let st = new Stack();
  for (i = 0; i < input.length; i++) {
    ch = input[i];
    if (ch >= "0" && ch <= "9") {
      num += ch;
    } else {
      number = num - 0;
      console.log(number);
      res.push(number);
      num = "";
      if (st.isEmpty()) st.push(ch);
      else {
        if (compare(ch, st.top())) {
          res.push(st.top());
          st.pop();
          st.push(ch);
        } else st.push(ch);
      }
    }
  }
  res.push(num - "0");
  while (!st.isEmpty()) {
    res.push(st.top());
    st.pop();
  }
  return res;
};

const Calculate = (string) => {
  let res = resolveInput(string);
  console.log("res=", res);
  let st = new Stack(),
    i,
    ch;
  for (i = 0; i < res.length; i++) {
    ch = res[i];
    if (ch !== "+" && ch !== "-" && ch !== "*" && ch !== "/") {
      st.push(ch);
      console.log(ch);
    } else {
      let temp, fir, sec;
      sec = st.top();
      st.pop();
      fir = st.top();
      st.pop();
      if (ch === "+") temp = fir + sec;
      else if (ch === "-") temp = fir - sec;
      else if (ch === "*") temp = fir * sec;
      else temp = fir / sec;
      console.log(ch);
      console.log(temp);
      st.push(temp);
    }
  }
  console.log(st.top());
  return st.top();
};

export default Calculate;
