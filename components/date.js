import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  const result = '<insert date here>';
  try {
    const result = format(date, 'LLLL d, yyyy')
  } catch (error) {
    console.log('error');
  }
  return <time dateTime={dateString}>{result}</time>
}