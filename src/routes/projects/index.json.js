import projects from '$lib/projects';

export async function get() {
  const body = Object.keys(projects).map((slug) => ({
    slug,
    ...projects[slug],
  }));

  return {
    status: 200,
    body: JSON.stringify(body)
  };
}
