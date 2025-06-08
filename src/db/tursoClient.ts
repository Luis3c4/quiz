import {createClient } from '@libsql/client';
const client = createClient({
    url:"libsql://ranking-limbert.aws-us-east-1.turso.io",
    authToken:"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDk0MDQ4NzQsImlkIjoiOTRkMjI5MGItYmQ1Yi00NWI2LWFmNzYtOWUxMjJmNTNkNWYxIiwicmlkIjoiNjE1YjU0OTYtNjk3ZC00NjJlLThlN2UtY2I0ZjlkYjhiM2RlIn0.jeb9UcKHEjcNQmYnTCi4SpbsWUjHHiuUKgbpUYRPHhF4C5snpyiY6Nb8O4MamBbLR9N3k3zAPSmLooDK_WNtAA"
})
export default client;