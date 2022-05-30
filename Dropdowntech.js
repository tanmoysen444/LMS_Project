import React, { useRef, useState } from 'react'

function Dropdowntech() {
  const [query, setQuery] = useState("");
  const [expanded,setExpanded] = useState(false);
  const [selectionOptions, setSelectionOptions] = useState(["Instagram","LinkedIn","Twitter"]);
  const myRef = useRef(null);

  const handleQueryChange = event => {
    console.log("Event:",event.target.value)
    setQuery(event.target.value);
  };
  const showPlatformOptions =()=> {
    // //  let checkboxes = el;
    //  console.log("ref:",myRef.current)
    //   if (!expanded) {
    //    //checkboxes.style.display = "block";
    //     setExpanded(true);
    //   } else {
    //   // checkboxes.style.display = "none";
    //     setExpanded(false);
    //   }
  
  
    }
  return (
    <form onSubmit={showPlatformOptions}>
    <div className="w-64">
      <div className="relative" onClick={showPlatformOptions}>
        <h6>PLATFORMS </h6>
        <select className="w-full font-semibold"  onChange={handleQueryChange}>
            {selectionOptions.map((platform,x) => (
                <option key={x} value={platform}>
                    {platform}
                </option>
            ))}
        </select>
        <div className="absolute left-0 right-0 top-0 bottom-0"></div>
      </div>
      <div 
      ref={myRef}
      className="checkboxes border-gray-200 border border-solid">
        <label htmlFor="one" className="block ">
          <input type="checkbox" id="one" onChange={handleQueryChange} className="m-3"/>
          Instagram</label>
        <label htmlFor="two" className="block">
          <input type="checkbox" id="two" onChange={handleQueryChange} className="m-3"/>
          LinkedIn</label>
        <label htmlFor="three" className="block">
          <input type="checkbox" id="three" onChange={handleQueryChange} className="m-3"/>
          Twitter</label>
      </div>
    </div>
  </form>
  )
}

export default Dropdowntech