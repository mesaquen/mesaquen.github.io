export const getExperience = () => {
  const startingDate = new Date('2013-05-01')
  const startingYear = startingDate.getFullYear()
  const now = new Date()
  return now.getFullYear() - startingYear
}
