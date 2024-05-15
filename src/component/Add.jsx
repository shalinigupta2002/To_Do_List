import { MdAddToPhotos } from "react-icons/md";

function Add({ onAdd }) {
  return (
    <div className='top-1 text-white 
     p-5'>
      <MdAddToPhotos 
        onClick={onAdd} 
        size={40} // Set size of the icon
        className="cursor-pointer
         transition-colors hover:bg-orange-500 duration-200"
      />
    </div>
  )
}

export default Add;

