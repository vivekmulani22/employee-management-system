  import React, { useState, useContext } from "react";
  import { AuthContext } from "../../context/AuthProvider";

  function CreateTask() {

    const [userData, setUserData] = useContext(AuthContext)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [category, setCategory] = useState("");

      const [task, setTask] = useState({});

    const submitHandler = (e) => {
      e.preventDefault();
      setTask({ title, description, dueDate, category,active:false,newTask:true,failed:true,completed:false });
      
      const data = userData
      
      

      
      data.employees.forEach(function(element){
        if(assignTo === element.firstName){
          if (!element.tasks) {
            element.tasks = [];
          }
          if (!element.taskCounts) {
            element.taskCounts = { new: 0, active: 0, completed: 0, failed: 0 };
          }
          element.tasks.push(task);
          element.taskCounts.new += 1;
        }
      });
      setUserData(data)
      console.log(data)
      
      localStorage.setItem('employees', JSON.stringify(data))
      setTitle("")
      setDescription("")
      setDueDate("")
      setAssignTo("")
      setCategory("")
    }
    return (
      <div className="min-h-[60vh] w-[93%] mx-auto items-center bg-[#1C1C1C]/50 backdrop-blur-xl text-white p-10 rounded-3xl border border-white/5">
        <form className="space-y-12" onSubmit={submitHandler}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-2 space-y-8">
              <div className="group">
                <h2 className="text-4xl font-bold mb-12 animate-pulse bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Create Task
                </h2>
                <label htmlFor="title" className="block text-emerald-400 mb-2 transform group-hover:translate-x-2 transition-transform duration-300">Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  id="title"
                  className="w-full bg-black/30 backdrop-blur-sm rounded-2xl p-4 border-l-4 border-emerald-400 focus:ring-2 ring-emerald-400/50 outline-none transition-all duration-500 hover:bg-black/40"
                />
              </div>
              
              <div className="group">
                <label htmlFor="Description" className="block text-emerald-400 mb-2 transform group-hover:translate-x-2 transition-transform duration-300">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="Description"
                  rows="6"
                  className="w-full bg-black/30 backdrop-blur-sm rounded-2xl p-4 border-l-4 border-emerald-400 focus:ring-2 ring-emerald-400/50 outline-none transition-all duration-500 hover:bg-black/40 resize-none"
                />
              </div>
            </div>
            
            <div className="space-y-8 bg-gradient-to-b from-black/40 to-transparent p-6 rounded-2xl backdrop-blur-lg">
              <div className="group">
                <label htmlFor="Date" className="block text-emerald-400 mb-2 transform group-hover:translate-x-2 transition-transform duration-300">Due Date</label>
                <input
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                    type="date"
                  id="Date"
                  className="w-full bg-black/30 rounded-xl p-3 border-b-2 border-emerald-400/50 focus:border-emerald-400 outline-none transition-all duration-300"
                />
              </div>
              
              <div className="group">
                <label htmlFor="assignTo" className="block text-emerald-400 mb-2 transform group-hover:translate-x-2 transition-transform duration-300">Assign to</label>
                <input
                  value={assignTo}
                  onChange={(e) => setAssignTo(e.target.value)}
                  type="text"
                  id="assignTo"
                  className="w-full bg-black/30 rounded-xl p-3 border-b-2 border-emerald-400/50 focus:border-emerald-400 outline-none transition-all duration-300"
                />
              </div>
              
              <div className="group">
                <label htmlFor="Category" className="block text-emerald-400 mb-2 transform group-hover:translate-x-2 transition-transform duration-300">Category</label>
                <input 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  type="text"
                  name="Category" 
                  id="Category" 
                  className="w-full bg-black/30 rounded-xl p-3 border-b-2 border-emerald-400/50 focus:border-emerald-400 outline-none transition-all duration-300"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full mt-8 relative group bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold py-3 px-6 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative">Create Task +</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  export default CreateTask;
