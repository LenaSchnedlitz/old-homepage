import {fetchPosts} from '../../helpers/get-posts';

export function get(req, res) {
  fetchPosts(req, res, 'projects');
}
