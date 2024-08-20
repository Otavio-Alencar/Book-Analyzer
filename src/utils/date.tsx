export const DateFormat = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const week = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  const now = new Date()
  const year = now.getFullYear()
  const dayMonth = now.getDate()
  const monthnumber = now.getMonth()
  const day = now.getDay() - 1

  const month = months[monthnumber]
  const weekday = week[day]
  return (
    <p className="text-black">
      {weekday}, {month} {dayMonth}, {year}
    </p>
  )
}
