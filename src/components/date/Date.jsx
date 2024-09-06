const date = () => {
  const today = new Date();

  function formatDate(date, weekday) {
    return new Intl.DateTimeFormat(
      'en-US',
      weekday
    ).format(date);
  }

  return (
    <div className="mb-16 flex flex-col justify-center items-start gap-2">
      <h2 className="font-bold text-xlg">{formatDate(today, { weekday: 'long' })}</h2>
      <h2 className="text-sm">{formatDate(today)}</h2>
    </div>
  )
}

export default date