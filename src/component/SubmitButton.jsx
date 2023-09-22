
export default function SubmitButton ({type, disabled, children}) {
  return (
    <button type={type} disabled ={disabled} className="text-lg bg-emerald-400 text-white outline-emerald-400 mt-5  md:w-96 w-full p-2 hover:bg-emerald-600 gap-0 rounded">{children}</button>
  )
}