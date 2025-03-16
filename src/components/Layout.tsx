import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow'>
        <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center'>
              <Link className='text-gray-900 hover:text-gray-700' to='/'>
                Home
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
