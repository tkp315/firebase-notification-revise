'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import useFCMToken from "./hooks/useFCMToken";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {
  const {data,status} = useSession()

  const {notificationPermissionStatus,token} = useFCMToken()
  console.log(token)
  const [users,setUsers] = useState([])
  
  const [selectedUser,setSelectedUser] = useState([])

  function handleChange(e){
    const {value} = e.target
  

  setSelectedUser((prev)=>{
    if(!prev.includes(value)){
      return [...prev,value]
    }
  })
  }

  useEffect(()=>{
  async function fetchUser(){
    const url = `/api/fetch-user`
    const res = await axios.get(url)
    console.log(res)

    if (res.status===200){
      setUsers(res.data.data)
    }
  }
  fetchUser()
  },[])

  console.log(selectedUser)

  const  sendNotification = async()=>{
    //D:\ALL_Projects\firebase-notification-revise\src\app\api\send-notification
    const res = await axios.post('/api/send-notification',{users:selectedUser})
    console.log(res)
  }



  return (
    <div className=" flex justify-center items-center min-h-screen">
     
     <Dialog>
  <DialogTrigger>
    <Button
    
    >Send Notification</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Notification</DialogTitle>
      
      <div className=" flex flex-col gap-2 "> 
       {
        users.map((user,idx)=>(
          <div key={idx} className=" flex flex-row justify-between gap-2 border px-1 py-3">
           <div>
            {
              user.email
            }
           </div>
           <input type="checkbox" 
            onChange={handleChange}
            value={user.email}
           />
           
          </div>
        ))
       }
      </div>
    </DialogHeader>
    <DialogFooter>
      <Button
      onClick={sendNotification}
      >Send</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

    </div>
  );
}
