import Link from "next/link"

function Category() {
  return (
    <>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
      <Link href="/Products">
         <p className="text-xl font-bold text-blue-700">Product Page</p>
        </Link>
      </div>
     

      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <div className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <img src="/home01.jpg" alt="" className="h-full w-full object-cover object-center"></img>
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0"></span>
              Desk and Office
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">Work from home accessories</p>
        </div>

        <div className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
         
            <img src="/home02.jpg" alt="" className="h-full w-full object-cover object-center"></img>
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0"></span>
              Self-Improvement
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">Journals and note-taking</p>
        </div>

        <div className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <img src="/home03.jpg" alt="" className="h-full w-full object-cover object-center"></img>
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0"></span>
              Travel
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">Daily commute essentials</p>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default Category