const TRY_LIKE = 'TRY_LIKE'
const IS_LIKED = 'IS_LIKED'

function getLikeInfo(id) {
  return {
    type: TRY_LIKE,
    payload: id
  }
}
