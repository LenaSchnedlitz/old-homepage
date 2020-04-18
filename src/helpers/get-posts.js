import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import hljs from 'highlight.js';
import marked from 'marked';

const fetchPostsFromDirectory = (directory) =>
    fs.readdirSync(path.resolve(directory)).map(fileName => {
      const post = fs.readFileSync(
          path.resolve(directory, fileName), 'utf-8');
      return grayMatter(post).data;
    });

const fetchPostFromDirectory = (directory, fileName) =>
    fs.readFileSync(path.resolve(directory, `${fileName}.md`), 'utf-8');

export function fetchPosts(req, res, directory) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  const posts = fetchPostsFromDirectory(directory);
  res.end(JSON.stringify(posts));
}

export function fetchNextPost(req, res, directory, next) {
  const {slug} = req.params;
  const post = fetchPostFromDirectory(directory, slug);
  const {data, content} = grayMatter(post);

  const renderer = new marked.Renderer();
  renderer.code = (source, lang) => {
    const {value: highlighted} = hljs.highlight(lang, source);

    return `<pre><code>${highlighted}</code></pre>`;
  };

  const html = marked(content, {renderer});

  if (html) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({html, ...data}));
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: `Not found`}));
  }
}
