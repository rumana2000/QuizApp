
export default function ResultCheckBox ({className,  text, ...rest}) {
  return (
    <label className={className}>
    <input {...rest} type="checkbox"/>{text}
  </label>
  )
}