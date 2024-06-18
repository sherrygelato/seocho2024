// ==========================================================================
// 연습문제 433
// 다음 코드가 오류가 나지 않도록 수정하시오.
// 단, itemPrices의 item에는 재고(stock)에 있는 item들만 가능합니다.

type Item = { item: string; price: number };
// type ItemPrice<T, U> = <이 부분을 작성하시오>;

// item : 'X' | 'Y' | 'Z' | 'P';
// [k in keyof ITEM]

// stock : 1000 | 2000 | 3000 | 4000;
// keyof STOCK 이건가?

// { item: 'X' | 'Y' | 'Z' | 'P', price: 'X' | 'Y' | 'Z' | 'P' }
// [k in keyof ITEM] : keyof STOCK

// 
// [k in keyof ITEM] : k extends 'item' ? keyof STOCK : number
// [k in keyof ITEM] : k extends 'item' ? keyof STOCK : ITEM[k]
// 값이 아니라 타입

type ItemPrice<T, U> = {
    [k in keyof T] : k extends 'item' ? keyof U : T[k]
};

const stock = { X: 1, Y: 2, Z: 30 };

const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: 'X', price: 1000 },
  { item: 'Y', price: 2000 },
  { item: 'Z', price: 3000 },
];

const total = itemPrices.reduce((curr, itemPrice) => 
                  curr + stock[itemPrice.item] * itemPrice.price, 0);

