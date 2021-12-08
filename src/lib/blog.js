const imports = import.meta.globEager('./blog/*.md');

const posts = [];
for (const path in imports) {
  const post = imports[path];
  if (post) {
    posts.push({
      slug: path.match('./blog/(.*).md')[1],
      ...post.metadata,
      ...post.default.render(),
    });
  }
}

export default posts;
