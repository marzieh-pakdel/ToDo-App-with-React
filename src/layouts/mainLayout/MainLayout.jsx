import LayoutCard from "../layoutCard/LayoutCard"


const Layout = ({children}) => {
  return (
    <main className="bg-primary-color h-screen flex justify-center items-center">
        <LayoutCard>{children}</LayoutCard>
    </main>
  )
}

export default Layout