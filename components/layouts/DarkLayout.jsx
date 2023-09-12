import AboutPage from "@/pages/about"
import MainLayout from "./MainLayout"

export const DarkLayout = ( { children } ) => {
  return (
    <div style={{
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '10px',
        color: 'black'
    }}>
        <h3>Dark-Layout</h3>
        <div>
        { children }
        </div>

    </div>
  )
}