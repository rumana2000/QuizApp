
export default function CheackBox({text,className}) {
  return (
    <>
      <input type="checkbox" required className={className} /> {text}
    </>
  )
}