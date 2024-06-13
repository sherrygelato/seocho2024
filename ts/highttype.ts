// p370
// 연습문제 type Ud2 = (TUser | TDept) & {addr: string};

interface TUser {
    id: number;
    name: string;
}
  
interface Dept {
    id: number;
    dname: string;
    captain: string;
}

interface Ud2_1 {
    id: number;
    // << <이 부분을 작성하시오>
    name?: string;
    dname?: string;
    captain?: string;
    // <이 부분을 작성하시오> >>
    addr: string;
}

interface Ud2_2 {
    id: number; // 최소한 공통되는 것은 포함 Ud2.id 작성
    // << <이 부분을 작성하시오>
    [k: string] : string | number; // index signature
    // <이 부분을 작성하시오> >>
    addr: string; // 최소한 공통되는 것은 포함 Ud2.addr 작성
}

// 정답
interface Ud2 {
    [k: string] : string | Number;
    id: number;
    addr: string;
}
  
// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = {id: 1, name: 'HH', addr: 'Seoul'};
const ud3: Ud2 = {id: 1, dname: 'HH', captain: 'HH', addr: 'Seoul'};