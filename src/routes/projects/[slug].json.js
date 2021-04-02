import {fetchNextPost} from '../../helpers/get-posts';

export function get(req, res, next) {
  fetchNextPost(req, res, 'projects', next);
}
