
export default function InputText ({type, placeholder, required, error, onChangeHandeler}) {
  return (
    <div>
      <input className="md:w-96 w-full  mt-5   border-emerald-400 outline-emerald-400 border-2 rounded  p-2"  type = {type} placeholder = {placeholder} required = {required} onChange={onChangeHandeler} />
      {error && <span className="flex font-medium text-base tracking-wide text-red-500 text-xs mt-1">{error}</span>}
   </div>
  )
}

