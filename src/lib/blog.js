const imports = import.meta.globEager('./blog/*.md');

const posts = [];
for (const path in imports) {
  const post = imports[path];
  if (post) {
    posts.push({
      ...post.metadata,
      ...post.default.render(),
    });
  }
}

export default posts;
