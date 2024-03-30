// import React, { useState } from "react";

// function Getapi3() {
//   const [inputItem, setInputItem] = useState("");
//   const [items, setItems] = useState([]);

//   const handleInput = (e) => {
//     setInputItem(e.target.value);
//   };

//   const addItem = () => {
//     if (inputItem.trim() !== "") {
//       setItems([...items, { text: inputItem }]);
//       setInputItem("");
//     } else {
//       alert("Please enter a valid item.");
//     }
//   };

//   const deleteItem = (index) => {
//     const newItems = [...items];
//     newItems.splice(index, 1);
//     setItems(newItems);
//   };

//   const editItem = (index) => {
//     const editedText = prompt("Enter new text:", items[index].text);
//     if (editedText !== null) {
//       const newItems = [...items];
//       newItems[index].text = editedText;
//       setItems(newItems);
//     }
//   };

//   return (
//     <div className="  bg-[url('https://images.pexels.com/photos/8105061/pexels-photo-8105061.jpeg?auto=compress&cs=tinysrgb&w=600')] h-[100vh] bg-cover bg-no-repeat flex flex-col justify-center items-center border m-auto h-[100vh]">
//       <div className="border-x-2 border-y-8 border-white-600 shadow-green-700 p-10 bg-purple-500/30 rounded-2xl shadow-2xl ">
//         <div className=" mt-3">
//           <h1 className=" font-bold text-xl mb-8 text-white shadow-xl underline underline-offset-4 decoration-2 decoration-green-900 decoration-solid">
//             ENTER TO ADD YOUR ITEMS
//           </h1>
//           <div>
//             <input
//               className=" rounded mr-2 border-none text-lg"
//               type="text"
//               placeholder="Items"
//               value={inputItem}
//               onChange={handleInput}
//             />
//             <button
//               className=" px-[8px] py-[5px] rounded bg-white text-black text-sm border-2 shadow-xl border-green-900 font-semibold"
//               onClick={addItem}
//             >
//               Add item
//             </button>
//           </div>
//         </div>
//         <div className="border-white-900 mt-4 h-auto">
//           <h2 className="mb-8 font-bold underline underline-offset-4 decoration-2 decoration-green-900 decoration-solid text-white">
//             Your Item list
//           </h2>
//           <ul>
//             {items.map((item, index) => (
//               <li key={index}>
//                 <tr>
//                   <td className="w-[50%] border-hidden text-white font-medium">{item.text}</td>

//                   <td className="border-hidden">
//                     <button
//                       className=" mb-3 px-[8px] py-[5px] rounded bg-white text-black text-sm border-2 border-green-900 font-semibold"
//                       onClick={() => deleteItem(index)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                   <td className="border-hidden">
//                     <button
//                       className=" ml-4 px-[18px] py-[5px] rounded bg-white text-black text-sm border-2 border-green-900 font-semibold"
//                       onClick={() => editItem(index)}
//                     >
//                       Edit
//                     </button>
//                   </td>
//                 </tr>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Getapi3;





import React, { useState } from "react";

function Getapi3() {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);

  const handleInput = (e) => {
    setInputItem(e.target.value);
  };

  const addItem = () => {
    if (inputItem.trim() !== "") {
      setItems([...items, { text: inputItem }]);
      setInputItem("");
    } else {
      alert("Please enter a valid item.");
    }
    
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const editItem = (index) => {
    const editedText = prompt("Enter new text:", items[index].text);
    if (editedText !== null) {
      const newItems = [...items];
      newItems[index].text = editedText;
      setItems(newItems);
    }
  };

  return (
    <div className="  bg-[url('https://images.pexels.com/photos/53135/hydrangea-blossom-bloom-flower-53135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[100vh] bg-cover bg-no-repeat flex flex-col justify-center items-center border m-auto h-[100vh]">
      <div className="border-x-2 border-y-4 border-white shadow-green-700 p-10 bg-purple-500/30 rounded-2xl shadow-2xl ">
        <div className=" mt-3">
          <h1 className=" font-bold text-xl mb-8 text-white bg-red-700 px-2 border-2 border-white">
            ENTER TO ADD YOUR ITEMS
          </h1>
          <div>
            <input
              className=" rounded mr-2 border-none text-lg"
              type="text"
              placeholder="Items"
              value={inputItem}
              onChange={handleInput}
            />
            <button
              className=" px-[8px] py-[5px] bg-black  hover:bg-red-700 active:bg-red-700 focus:outline-none focus:ring focus:white-yellow-300 rounded text-white text-s  shadow-xl border-white font-semibold"
              onClick={addItem}
            >
              Add item
            </button>
          </div>
        </div>
        <div className="border-white-900 mt-4 h-auto">
          <h2 className="mb-8 font-bold underline underline-offset-4 decoration-2 decoration-red-600 decoration-solid text-white">
            Your Item list
          </h2>
          <ul className=" p-2  border-2 border-white">
            {items.map((item, index) => (
              <li key={index}>
                <tr>
                  <td className="w-[50%] border-hidden text-white font-medium">{item.text}</td>

                  
                  <td className="border-hidden">
                    <button
                      className=" mb-2 mr-3 px-[18px] py-[5px] rounded  bg-red-700 hover:bg-aqua active:bg-red-700 focus:outline-none focus:ring focus:white-yellow-300 text-white text-sm border-2 border-white font-semibold"
                      onClick={() => editItem(index)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="border-hidden">
                    <button
                      className="  px-[8px] py-[5px] rounded bg-black  hover:bg-red-700 active:bg-red-700 focus:outline-none focus:ring focus:white-yellow-300 text-white text-sm border-2 border-white font-semibold"
                      onClick={() => deleteItem(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Getapi3;
























