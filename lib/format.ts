import { parse, format } from 'date-fns'

export function formatDate(date: string) {
  const fmt = parse(date, 'yyyy-MM-dd-HH-mm', new Date())
  // return format(fmt, 'yyyy/MM/dd HH:mm')
  return format(fmt, 'yyyy/MM/dd')
}