const TRY_LIKE = 'TRY_LIKE'
const IS_LIKED = 'IS_LIKED'

function getPhotos(year) {
  return {
    type: TRY_LIKE,
    payload: year
  }
}
