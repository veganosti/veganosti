export const formatDistance = (distance) => {
  if (distance === undefined) {
    return '';
  }

  return (Math.round(distance * 10) / 10).toString() + ' km'
}
