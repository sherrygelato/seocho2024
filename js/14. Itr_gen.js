const obj = {
    values: [1, 2, 3, 4, 5],
  
    // [Symbol.iterator]() {
    //   // iterator를 반환한다.
    //   const self = this;
    //   return {
    //     currIdx: -1, // current cursor(index)
    //     next() {
    //       this.currIdx += 1;
    //       return {
    //         value: self.values[this.currIdx],
    //         done: this.currIdx >= self.values.length,
    //       };
    //     },
    //   };
    // },
  
    *[Symbol.iterator]() {
      for (const a of this.values) yield a;
    },
  
    iterator() {
      return this[Symbol.iterator]();
    },
  };
  console.log('obj:', obj.values);
  
  const it = obj.iterator();
  console.log('obj.iterator:', it);
  console.log('next:', it.next());
  console.log('next:', it.next());
  console.log('next:', it.next());
  console.log('next:', it.next());
  console.log('next:', it.next());
  console.log('next:', it.next());
  
  console.log('---------------------');
  console.log('XXX=', [...obj]);
  for (const x of obj) {
    console.log(x);
  }