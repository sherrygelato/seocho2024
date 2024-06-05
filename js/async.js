// https://jsonplaceholder.typicode.com
// user 이름을 구하는 함수를 작성하세요.

const URL = 'https://jsonplaceholder.typicode.com';

const getUserName = async userId => {

    const res = await fetch(`${URL}/users/${userId}`); // Fetch 속에 promise 품고 있음
    // console.log(`user ${userId}번의 response : ${res}`, res);

    // if (!res.ok) throw new Error("Failed to Fetch!!");
    // <2초 sleep하도록 이 부분을 작성해 보세요!>  await new Promise(resolve => setTimeout(resolve, 2000));
  
    // promise 약속을 백그라운드에 맡긴다
    // resolve 약속 지킨다
    // reject 약속 안지킨다
    await new Promise((resolve, reject) => {
        setTimeout(() => resolve('OK'), 2000); // resolve
    });
    const data = await res.json();
    // console.log(`user ${userId}번의 data : ${data}`, data);
  
    return data?.name;
};

console.log(`해당 user의 이름은 ${getUserName(1)} 입니다.`); // pending 진행중
console.log(`해당 user의 이름은 ${await getUserName(1)} 입니다.`); // await 쓰는!


// Response {
//     status: 200,
//     statusText: 'OK',
//     headers: Headers {
//       date: 'Wed, 05 Jun 2024 04:43:00 GMT',
//       'content-type': 'application/json; charset=utf-8',
//       'transfer-encoding': 'chunked',
//       connection: 'keep-alive',
//       'report-to': '{"group":"heroku-nel","max_age":3600,"endpoints":[{"url":"https://nel.heroku.com/reports?ts=1715201299&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&s=De4ypyVjQH02vdCwlTTAWqvd8y3ZtA6P60tYlAHsXxo%3D"}]}',
//       'reporting-endpoints': 'heroku-nel=https://nel.heroku.com/reports?ts=1715201299&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&s=De4ypyVjQH02vdCwlTTAWqvd8y3ZtA6P60tYlAHsXxo%3D',
//       nel: '{"report_to":"heroku-nel","max_age":3600,"success_fraction":0.005,"failure_fraction":0.05,"response_headers":["Via"]}',
//       'x-powered-by': 'Express',
//       'x-ratelimit-limit': '1000',
//       'x-ratelimit-remaining': '999',
//       'x-ratelimit-reset': '1715201352',
//       vary: 'Origin, Accept-Encoding',
//       'access-control-allow-credentials': 'true',
//       'cache-control': 'max-age=43200',
//       pragma: 'no-cache',
//       expires: '-1',
//       'x-content-type-options': 'nosniff',
//       etag: 'W/"1fd-+2Y3G3w049iSZtw5t1mzSnunngE"',
//       via: '1.1 vegur',
//       'cf-cache-status': 'HIT',
//       age: '18286',
//       server: 'cloudflare',
//       'cf-ray': '88ed7fceeb9b08cc-LAX',
//       'content-encoding': 'br',
//       'alt-svc': 'h3=":443"; ma=86400'
//     },
//     body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
//     bodyUsed: false,
//     ok: true,
//     redirected: false,
//     type: 'basic',
//     url: 'https://jsonplaceholder.typicode.com/users/1'
//   }
//   {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: { lat: '-37.3159', lng: '81.1496' }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets'
//     }
//   }