
export default function CheackBox({text,className}) {
  return (
    <>
      <input type="checkbox" className={className} /> {text}
    </>
  )
}