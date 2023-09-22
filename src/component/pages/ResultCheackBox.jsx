
export default function ResultCheackBox ({className,text}) {
  return (
    <label className={className}>
    <input type="checkbox"/> {text}
  </label>
  )
}