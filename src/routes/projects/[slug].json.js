import projects from '$lib/projects';

export function get({ params }) {
  const post = projects.find(x => x.slug === params.slug);
  if (post) {
    return {
      status: 200,
      body: post,
    };
  }

  return {
    status: 404,
  };
}
