import Card from "../card/Card"


const Layout = ({children}) => {
  return (
    <main className="bg-primary-color h-screen flex justify-center items-center">
        <Card>{children}</Card>
    </main>
  )
}

export default Layout