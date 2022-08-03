import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 py-6 mx-auto max-w-7xl px-3 sm:px-6 md:px-8 pt-20">
        <div className='space-y-4 rounded-md border bg-white py-2 pl-5 pr-5 shadow'>
        {children}
        </div>
      </main>
    </>
  )
}