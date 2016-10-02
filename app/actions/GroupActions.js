import { arrayOf } from 'normalizr';
import { groupSchema } from 'app/reducers';
import { Group } from './ActionTypes';
import callAPI from 'app/actions/callAPI';

export function fetchGroup(groupId) {
  return callAPI({
    types: Group.FETCH,
    endpoint: `/groups/${groupId}/`,
    schema: groupSchema,
    meta: {
      errorMessage: 'Fetching group failed'
    }
  });
}

export function fetchAll() {
  return callAPI({
    types: Group.FETCH,
    endpoint: '/groups/',
    schema: arrayOf(groupSchema),
    meta: {
      errorMessage: 'Fetching groups failed'
    }
  });
}

export function updateGroup({ groupId, updates }) {
  return callAPI({
    types: Group.UPDATE,
    endpoint: `/groups/${groupId}/`,
    method: 'patch',
    body: updates,
    schema: groupSchema,
    meta: {
      errorMessage: 'Updating group failed'
    }
  });
}