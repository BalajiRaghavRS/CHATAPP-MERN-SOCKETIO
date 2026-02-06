
import React from 'react'
import toast from 'react-hot-toast';

export const useGetConversations = () => {
  const [loading,setloading] = React.useState(false);
  const [conversations,setConversations] = React.useState([]);

  React.useEffect(()=>{
    const getConversations = async()=>{
        setloading(true);
        try {
            const res = await fetch("/api/users");
            const data = await res.json();
            if(data.error) throw new Error(data.error);
            setConversations(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setloading(false);
        }
    }
        getConversations();
  },[]);
  return { loading, conversations };
}
export default useGetConversations;