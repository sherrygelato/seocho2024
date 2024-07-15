## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## API

### User

- regist
- login
- logout
- withdraw

### Book

- list : GET /books
- getOne : GET /books/bookId
- add : POST /books
- update : PUT|PATCH /books/bookId
- delete : DELETE /books/bookId

### Mark

- list per Book
- add
- update
- delete
- click => new tab & delete(when clickdel=1)
