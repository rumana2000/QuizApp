
export default function InputText ({type , placeholder}) {
  return (
    <div>
      <input className="md:w-96 w-full  mt-5   border-emerald-400 outline-emerald-400 border-2 rounded  p-2" type = {type} placeholder = {placeholder}  />
   </div>
  )
}