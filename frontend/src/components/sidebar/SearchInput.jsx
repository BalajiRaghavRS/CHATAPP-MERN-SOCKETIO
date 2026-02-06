import React from 'react'
import { MdOutlinePersonSearch } from "react-icons/md";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';
const SearchInput = () => {
  const [search,setSearch]=React.useState("");  

  const {setSelectedConversation}=useConversation();
  const {conversations}=useGetConversations();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search)return;
    if(search.length<3){
      return toast.error("Search query must be at least 3 characters long");
    }

    const conversation= conversations.find((c)=>c.fullname.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }else{
      toast.error("No conversation found with that name");
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input 
        type="text" 
        placeholder='Search__'
        className='input input-bordered rounded-full'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button type='submit' 
        className='btn btn-circle bg-sky-500 text-white'>
            <MdOutlinePersonSearch className='w-6 h-6 outline-none' />
        </button>
    </form>
  )
}

export default SearchInput


// import React from 'react'
// import { MdOutlinePersonSearch } from "react-icons/md";
// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input 
//         type="text" 
//         placeholder='Search__'
//         className='input input-bordered rounded-full'
//         />
//         <button type='submit' 
//         className='btn btn-circle bg-sky-500 text-white'>
//             <MdOutlinePersonSearch className='w-6 h-6 outline-none' />
//         </button>
//     </form>
//   )
// }

// export default SearchInput