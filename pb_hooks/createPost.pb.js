routerAdd("POST", "/posts", (c) => {
  const body = toString(c.request().body);
  const text = JSON.parse(body).text;

  // 2. Replace the vulnerableQuery with this safeQuery to prevent SQL injection:
  //
  // const safeQuery = `INSERT INTO posts (text) VALUES ({:text})`;
  //
  // Better yet, could just use the PocketBase SDK to interact with the database.
  // An example of how to do this can be found in myflawednextapp2/src/app/posts/actions.js.
  // The onSubmit function could be replaced by a form action that calls the createPost function.
  // https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

  const vulnerableQuery = `INSERT INTO posts (text) VALUES ('${text}')`;

  $app.dao().db().newQuery(vulnerableQuery).bind({ text: text }).execute();

  return c.json(200, { message: "Post added :)" });
});
