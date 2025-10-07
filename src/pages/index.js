// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API = "http://localhost:5000/api/todos";

// export default function App() {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Load todos
//   useEffect(() => {
//     setLoading(true);
//     axios.get(API)
//       .then(res => setTodos(res.data))
//       .catch(console.error)
//       .finally(() => setLoading(false));
//   }, []);

//   // Add todo
//   const addTodo = async () => {
//     if (!text.trim()) return;
//     try {
//       const res = await axios.post(API, { text: text.trim() });
//       setTodos(prev => [res.data, ...prev]);
//       setText("");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Toggle completed
//   const toggleTodo = async (id, currentCompleted) => {
//     try {
//       // Pass desired completed state to API (in case your backend expects it)
//       const res = await axios.put(`${API}/${id}`, { completed: !currentCompleted });
//       setTodos(todos.map(t => t._id === id ? res.data : t));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Delete todo
//   const deleteTodo = async (id) => {
//     try {
//       await axios.delete(`${API}/${id}`);
//       setTodos(todos.filter(t => t._id !== id));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   console.table(todos)

//   return (
//     <div className="min-h-screen bg-slate-50 flex items-start justify-center p-6">
//       <div className="w-full max-w-2xl">
//         <header className="mb-6">
//           <h1 className="text-3xl font-semibold text-slate-800">Todo App</h1>
//           <p className="text-sm text-slate-500 mt-1">Practice CRUD with a simple full-stack todo list.</p>
//         </header>

//         <main className="bg-white shadow-md rounded-lg p-6">
//           {/* Input */}
//           <div className="flex gap-3 items-center mb-6">
//             <input
//               type="text"
//               placeholder="Add a new todo"
//               value={text}
//               onChange={e => setText(e.target.value)}
//               onKeyDown={e => e.key === "Enter" && addTodo()}
//               className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300"
//             />
//             <button
//               onClick={addTodo}
//               className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 active:scale-95 transition-transform"
//             >
//               Add
//             </button>
//           </div>

//           {/* Todos list */}
//           <section>
//             {loading ? (
//               <div className="text-center py-8 text-slate-500">Loading...</div>
//             ) : todos.length === 0 ? (
//               <div className="text-center py-8 text-slate-400">No todos yet — add one above ✨</div>
//             ) : (
//               <ul className="space-y-3">
//                 {todos
//                   .map(t => (
//                     <li
//                       key={t._id}
//                       className="flex items-center justify-between gap-3 p-3 border border-slate-100 rounded-lg hover:shadow-sm"
//                     >
//                       <div className="flex items-center gap-3">
//                         <button
//                           onClick={() => toggleTodo(t._id, t.completed)}
//                           className={`w-6 h-6 flex items-center justify-center rounded-md border ${t.completed ? "bg-sky-600 border-sky-600 text-white" : "border-slate-300"
//                             }`}
//                           aria-label="toggle complete"
//                         >
//                           {t.completed ? "✓" : ""}
//                         </button>

//                         <span
//                           onClick={() => toggleTodo(t._id, t.completed)}
//                           className={`select-none cursor-pointer ${t.completed ? "line-through text-slate-400" : "text-slate-800"
//                             }`}
//                         >
//                           {t.text}
//                         </span>
//                       </div>

//                       <div className="flex items-center gap-2">
//                         {/* Edit placeholder (optional) */}
//                         {/* <button className="text-sm text-sky-600">Edit</button> */}

//                         <button
//                           onClick={() => deleteTodo(t._id)}
//                           className="text-sm text-red-600 hover:underline"
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </li>
//                   ))}
//               </ul>
//             )}
//           </section>
//         </main>

//         <footer className="mt-4 text-xs text-slate-400 text-center">
//           Tip: click the checkbox or the text to toggle completed.
//         </footer>
//       </div>
//     </div>
//   );
// }


import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // const token = localStorage.getItem("token");
    const token = '32';
    // router.replace(token ? "/dashboard" : "/login");
  }, [router]);

  return null;
}
