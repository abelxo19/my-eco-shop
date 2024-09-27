import Image from "next/image"
import logo from '@/assets/eco.png'

const footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
     <hr  className=""/>   
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between mx-8">
            <div className="mb-6 md:mb-0">
                <a href="/" className="flex items-center">
                    <Image src={logo} className="w-10 h-7 lg:h-8 lg:w-14 me-3" alt="FlowBite Logo" />
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Eco Shop</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="/aboutus" className="hover:underline">About Us</a>
                        </li>
                        <li>
                            <a href="/contactus" className="hover:underline">Contact Us</a>
                        </li>
                        <li className="mt-4">
                            <a href="/faqs" className="hover:underline">FAQs</a>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="/privacypolicy" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Terms & Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between mx-8">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Eco Shop™</a>. All Rights Reserved.</span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                    <span className="sr-only">Discord community</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 17">
                        <path fillRule="evenodd" d="M11.453 0c-.283 0-.572.028-.852.082a6.208 6.208 0 0 0-2.284.852A4.348 4.348 0 0 0 5.052 3.55 6.24 6.24 0 0 0 2.475 7.872 6.254 6.254 0 0 0 2.275 7.92a6.31 6.31 0 0 0-.308 1.464v1.565c0 .637.105 1.264.308 1.858a6.292 6.292 0 0 0 4.503 4.803 6.19 6.19 0 0 0 2.265.477c.64 0 1.28-.091 1.898-.267a6.224 6.224 0 0 0 3.425-2.077 6.269 6.269 0 0 0 1.788-4.448V6.443a6.31 6.31 0 0 0-.308-1.465A6.271 6.271 0 0 0 13.58 2.6a6.24 6.24 0 0 0-2.284-.852A6.037 6.037 0 0 0 11.453 0Zm-3.618 1.128a3.764 3.764 0 0 1 1.218.195c.389.139.75.328 1.072.558a3.747 3.747 0 0 1 1.405 2.13 3.738 3.738 0 0 1 .111.836v.434c0 .272-.037.542-.111.809a3.727 3.727 0 0 1-2.178 2.157c-.47.188-.965.295-1.457.295-.651 0-1.274-.115-1.866-.348a3.732 3.732 0 0 1-2.489-2.483 3.729 3.729 0 0 1-.352-1.868v-.028a3.71 3.71 0 0 1 .382-1.68 3.745 3.745 0 0 1 1.237-1.366 3.69 3.69 0 0 1 1.451-.48Zm2.632 4.953a1.762 1.762 0 0 1 1.069-1.039 1.8 1.8 0 0 1 1.075-.263c.177 0 .357.023.535.067a1.757 1.757 0 0 1 1.256 1.258c.04.16.06.328.06.496v.124c0 .25-.036.493-.106.724a1.75 1.75 0 0 1-1.117 1.078 1.717 1.717 0 0 1-1.339-.15 1.727 1.727 0 0 1-.761-.888 1.742 1.742 0 0 1-.175-.717v-.073Zm-4.185 1.825a2.665 2.665 0 0 0 2.205-2.202v-.018c0-.068-.014-.138-.041-.224a2.669 2.669 0 0 0-.272-.594 2.71 2.71 0 0 0-.712-.773 2.604 2.604 0 0 0-1.36-.362c-.498 0-1.01.075-1.51.212a2.69 2.69 0 0 0-1.273.855 2.73 2.73 0 0 0-.583 1.388c-.146.556-.22 1.141-.22 1.725v.15c0 .513.071 1.016.209 1.511a2.676 2.676 0 0 0 1.377 1.575 2.615 2.615 0 0 0 1.455.38Zm.422-1.78a1.752 1.752 0 0 1-.852-.208 1.718 1.718 0 0 1-.645-.553 1.792 1.792 0 0 1-.351-.749c-.045-.185-.066-.374-.066-.567v-.029c0-.186.025-.369.073-.558a1.75 1.75 0 0 1 .285-.567c.121-.178.28-.322.472-.428a1.708 1.708 0 0 1 .627-.146c.263 0 .528.053.779.156a1.777 1.777 0 0 1 1.035 1.48v.044a1.746 1.746 0 0 1-1.054 1.602Z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Github account</span>
                </a>
            </div>
        </div>
    </div>
</footer>

  )
}

export default footer
