/* eslint-disable react/prop-types */


function Modal({children}) {

  return (
    <div className="absolute m-auto right-0 left-0 bg-gray-200 w-[80%]  h-1/2 lg:w-1/2 lg:h-[60%] lg:top-40 ">
      <div className="h-full flex justify-center p-16 flex-col gap-8 ">
        {children}
        <div className="flex justify-center gap-6">
          <button className="bg-indigo-600 px-3 py-3 text-white rounded-lg" onClick={()=>handleCancel}>
            Cancel
          </button>
          <button className="bg-indigo-600 px-3 py-3 text-white rounded-lg" onClick={()=>handleSaveEdit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
