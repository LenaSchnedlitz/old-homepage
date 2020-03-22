import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';
import hljs from 'highlight.js';
import marked from 'marked';

const getPost = fileName =>
    fs.readFileSync(path.resolve('portfolio', `${fileName}.md`), 'utf-8');

export function get(req, res, next) {
  const {slug} = req.params;
  const post = getPost(slug);
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
