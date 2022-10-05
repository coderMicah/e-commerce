import {HiStar} from 'react-icons/hi'
function ProductOverview() {
  return (
    <>
      <div className="py-10">
   
        <div className="grid grid-cols-1  px-4 md:grid-cols-2 md:gap-6 lg:px-8">
          <div>
            <div className="rounded-lg md:block">
              <img
                src="/home01.jpg"
                alt="Two each of gray, white, and black shirts laying flat."
                 className="h-full w-full object-cover object-center"
              ></img>
            </div>
          </div>

          {/* <!-- Product info --> */}
          <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                Basic Tee 6-Pack
              </h1>
            <div>
              {/* <!-- Options --> */}
              <div >
                <h2 className="sr-only">Product information</h2>
                <p className="py-1 text-2xl tracking-tight text-gray-900">$192</p>

                {/* <!-- Reviews --> */}
                <div>
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {/* <!--
                Heroicon name: mini/star
                Active: "text-gray-900", Default: "text-gray-200"
              --> */}
                      <HiStar  className="text-gray-900 h-5 w-5 flex-shrink-0"/>
                      <HiStar  className="text-gray-900 h-5 w-5 flex-shrink-0"/>
                      <HiStar  className="text-gray-900 h-5 w-5 flex-shrink-0"/>
                      <HiStar  className="text-gray-900 h-5 w-5 flex-shrink-0"/>  
                      <HiStar className="text-gray-200 h-5 w-5 flex-shrink-0"/>                
                    </div>
                    <p className="sr-only">4 out of 5 stars</p>
                    <a
                      href="#"
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      117 reviews
                    </a>
                  </div>
                </div>

            
              </div>
              {/* <!-- Description and details --> */}
              <div className="my-6">
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-sm md:text-base text-gray-500">
                    The Basic Tee 6-Pack allows you to fully express your
                    vibrant personality with three grayscale options. Feeling
                    adventurous? Put on a heather gray tee. Want to be a
                    trendsetter? Try our exclusive colorway: &quot;Black&quot;.
                    Need to add an extra pop of color to your outfit? Our white
                    tee has you covered.
                  </p>
                </div>
              </div>

              <button
                  type="submit"
                  className="sm:mt-10 mt-0 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Hand cut and sewn locally
                      </span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Dyed with our proprietary colors
                      </span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Pre-washed &amp; pre-shrunk
                      </span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">Ultra-soft 100% cotton</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    The 6-Pack includes two black, two white, and two heather
                    gray Basic Tees. Sign up for our subscription service and be
                    the first to get new, exciting colors, like our upcoming
                    &quot;Charcoal Gray&quot; limited release.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductOverview;
