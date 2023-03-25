import { createContext, useState } from "react";


let SideBarContext = createContext()

export const SideBarProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    const showSidebar = () => {
        setOpen(!open)
    }

    return (
        <SideBarContext.Provider value={{ open, setOpen, showSidebar, darkMode, setDarkMode }}>
            {children}
        </SideBarContext.Provider>
    )
}

export default SideBarContext