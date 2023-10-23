"use client " ; 
import  { useChat} from "ai/react";
export default function Home() {
     const { messages, input, handleInputChange, handleSubmit } = useChat();
     return (
      <div className= "pt-4 pb-32">
        {messages.map ((message) => (
          <div key= {message.id} className="border-t  border-black/10">
            <div className="max-w-3xl mx-auto py-6 flex ">
              <span className="ml-3">{message.content}</span>
            </div>
          </div> 
        ))}

        <form className = "fixed insert-x-0 bottom-10" onSubmit={handleSubmit}>
         <input placeholder="send a message" value={input} onChange={handleInputChange} />
        </form>
      </div>
     );

}
        