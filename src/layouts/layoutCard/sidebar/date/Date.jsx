import { CiCalendarDate } from "react-icons/ci";

const date = () => {
  const today = new Date();

  function formatDate(date, weekday) {
    return new Intl.DateTimeFormat(
      'en-US',
      weekday
    ).format(date);
  }

  return (
    <div className="mb-24 flex justify-center items-center gap-1">
      <CiCalendarDate size={55} />
      <div className="flex flex-col justify-center items-start gap-1">
        <h2 className="font-bold text-xlg">{formatDate(today, { weekday: 'long' })}</h2>
        <h2 className="text-sm">{formatDate(today)}</h2>
      </div>
    </div>
  )
}

export default date