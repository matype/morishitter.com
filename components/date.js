import { parseISO, format } from "date-fns"

export default function Date({ dateString }) {
  if (dateString === "Current") {
    return <time>Current</time>
  }
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, "YYY/MM")}</time>
}
