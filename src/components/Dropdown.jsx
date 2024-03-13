import { useEffect, useRef, useState } from "react"

export const Dropdown = ({title, content }) => {

  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null);

  const toggleDropdown = () =>{
    setIsOpen(!isOpen)
    console.log("Estado de isOpen después de cambiar:", isOpen);
  }

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [isOpen]);

  return (
    <div className="dropdown-container">
      <div className={`dropdown-toggle ${ isOpen ? 'active' : ''}`} onClick={toggleDropdown}>
        {title}
      </div>
      <div ref={contentRef} className="menu-dropdown p-1">
        {content}
      </div>
    </div>
  )
}


