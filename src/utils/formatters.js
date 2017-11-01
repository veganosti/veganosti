export const formatDistance = (distance) => {
  if (distance === undefined) {
    return '';
  }

  return (Math.round(distance * 100) / 100).toString() + ' km'
}
