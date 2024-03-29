import { Fragment } from 'react'
import { Popover, Transition, } from '@headlessui/react'
import { Menu } from '@headlessui/react'
import { useState } from 'react'
import {
  // ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  // EnvelopeIcon,
  PlayIcon,
  ShieldCheckIcon,
  // Squares2X2Icon,
  XMarkIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { vistamobile, vistarcm } from '../assets'
import { Link} from 'react-router-dom'
import MyCustomLink from './MyCustomLink'
// import { MyCustomLink } from './MyCustomLink'

// import CheckOutsideClick from './CheckOutsideClick'


const solutions = [
  // {
  //   name: 'Physicians Billing Services',
  //   description: '',
  //   href: '/service/physician-billing-services',
  //   icon: ChartBarIcon,
  // },
  {
    name: 'Eligibility & Benefit Verification',
    description: ' ',
    href: '/service/eligibility-verification',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Medical Coding',
    description: '',
    href: '/service/medical-coding',
    icon: CursorArrowRaysIcon,
  },
  // {
  //   name: 'Medical Billing And Collections',
  //   description: ' ',
  //   href: '/service/medical-billing-and-collections',
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: 'Fee Schedule Evaluations',
  //   description: ' ',
  //   href: '/service/fee-schedule-evaluations',
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: 'Healthcare Contract Management',
  //   description: ' ',
  //   href: '/service/healthcare-contract-management',
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: ' Healthcare Denial Management',
  //   description: ' ',
  //   href: '/service/healthcare-denial-management',
  //   icon: CursorArrowRaysIcon,
  // },
  {
    name: 'Billing, Denial Management & A/R ',
    description: ' ',
    href: '/service/billing-Denial Management-A/R',
    icon: CursorArrowRaysIcon,
  },
  // {
  //   name: 'Practice Management',
  //   description: ' ',
  //   href: '/service/physician-medical-practice-management',
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: 'Patient Eligibility Verification',
  //   description: ' ',
  //   href: '/service/eligibility-verification',
  //   icon: CursorArrowRaysIcon,
  // },
 
  {
    name: 'Physician Credentialing ',
    description: ' ',
    href: '/service/phycisian-credentialing',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Pre-Authorization',
    description: ' ',
    href: '/service/revenue-cycle-management',
    icon: CursorArrowRaysIcon,
  },
  // { name: 'Medical Billing And Collections',
  //  description: "Your customers' data will be safe and secure.", 
  //  href: 'service/medical-billing-and-collection', 
  //  icon: ShieldCheckIcon },
  // {
  //   name: 'Integrations',
  //   description: "Connect with third-party tools that you're already using.",
  //   href: 'service/medical-billing-and-collection',
  //   icon: Squares2X2Icon,
  // },
  // {
  //   name: 'Automations',
  //   description: 'Build strategic funnels that will drive your customers to convert',
  //   href: '#',
  //   icon: ArrowPathIcon,
  // },
]
const callsToAction = [
  // { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact', href: 'mailto:support@vistarcm.com', target:"_blank", icon: EnvelopeIcon },
]
const resources = [
  {
    name: 'About VistaRCM',
    href: '/aboutvistarcm',
    icon: LifebuoyIcon,
  },
  {
    name: 'Testimonials',
    href: '/about/testimonials',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Careers',
    href: '/about/careers',
    icon: CalendarIcon,
  },
//   { name: 'Contact Us', 
//   href: '/about', 
//   icon: ShieldCheckIcon 
// },
]
const recentPosts = [
  { id: 1, name: 'Solutions for the Revenue Cycle and clinical labor shortage', href: '/about/blogs' },
  // { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  // { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MainHeader() {
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () =>{
    setOpen(true);
  }
  const handleClose = () =>{
    setOpen(false);
  }
  // const [show, setShow] = useState(true)
  function EditInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function EditActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function DuplicateInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H12V12H4V4Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path
          d="M8 8H16V16H8V8Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function DuplicateActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H12V12H4V4Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path
          d="M8 8H16V16H8V8Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function ArchiveInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="8"
          width="10"
          height="8"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="4"
          width="12"
          height="4"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }
  
  function ArchiveActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="8"
          width="10"
          height="8"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="4"
          width="12"
          height="4"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }
  
  function MoveInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
        <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
        <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }
  
  function MoveActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
        <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
        <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
      </svg>
    )
  }
  
  function DeleteInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="10"
          height="10"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
        <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }
  
  function DeleteActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="10"
          height="10"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
        <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
      </svg>
    )
  }
  
  return (
    <Popover className="relative bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
           <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={vistarcm}
                alt=""
              />
            </Link>
          </div>
          {/*<div className="-my-2 -mr-2 md:hidden">
            
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none ">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div> */}
          
        <Menu as="div" className="relative inline-block text-left z-[999]">
          <div className='-my-2 -mr-2 md:hidden z-[999]' >
          <Menu.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none ">
            <span className="sr-only">Options</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />

            {/* <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            /> */}
          </Menu.Button>
        </div>
         {/* Mobile view */}



         <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item static as={Link} to="/">
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    
                    Home
                  </button>
                )}
              </Menu.Item>
               
                <Menu>
                <Menu.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 focus:outline-none text-sm">
          <span >Our Services</span>
            
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
    <Menu.Items >
      {/* <Menu.Item as={Link} to="/">
      {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  
                >
                  Eligibility Verification
                </button>
              )}
      </Menu.Item> */}
       <Menu.Item>
          {({ close }) => (

            <MyCustomLink href="/service/eligibility-verification" onClick={close}
            
            >
              Eligibility Verification
            </MyCustomLink>
           )} 
        </Menu.Item>
      <Menu.Item>
      {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  
                  Medical Coding
                </button>
              )}
      </Menu.Item>
      <Menu.Item>
      {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  
                  Billing, Denial & A/R 
                </button>
              )}
      </Menu.Item>
      <Menu.Item>
      {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  
                  Credentialing
                </button>
              )}
      </Menu.Item>
      <Menu.Item>
      {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  
                  Pre-Authorization
                </button>
              )}
      </Menu.Item>
      
      
      </Menu.Items>
      </Transition>
      </Menu>



            </div>
            <div className="px-1 py-1">
              <Menu.Item as={Link} to="/about/blogs" >
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {/* {active ? (
                      <ArchiveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                     Blogs
                     
                  </button>
                )}
                
              </Menu.Item>

              {/* dropdown */}
              <Menu>
                  <Menu.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 focus:outline-none text-sm">
            <span >About Us</span>

            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
      <Menu.Items>
        <Menu.Item>
        {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    About VistaRCM
                  </button>
                )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Testimonials
                  </button>
                )}
        </Menu.Item>
        <Menu.Item 
        >
        {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link to="/about/careers">
                    Careers
                    </Link>
                  </button>
                )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Contact
                  </button>
                )}
        </Menu.Item>
        
        </Menu.Items>
        </Menu>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {/* {active ? (
                      <DeleteActiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )} */}
                    Book a free trial
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
        </Menu>
        {/* desktop navbar */}
          <Link to="/" className="text-base font-medium text-gray-500 hover:text-white hidden md:block">
              Home
            </Link>

          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
              {({ open,close }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? '' : '',
                      'group inline-flex items-center rounded-md text-base text-gray-500 font-medium hover:text-white focus:outline-none lg:h-2'
                    )}
                  >
                    <span>Our Services</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel  className="absolute z-[999] -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="lg:h-96 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-y:scroll" >
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 scrollbar scrollbar-thumb-rose-500 scrollbar-track-slate-700" >
                          {solutions.map((item) => (
                            <Link
                            onClick={()=>{
                              close();
                              console.log('click')
                            }}
                              key={item.name}
                              to={item.href}
                              className=  "-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50" 
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link to="/about/blogs" className="text-base font-medium text-gray-500 hover:text-white sm:hidden md:flex">
              Blogs
            </Link>
            <Link to="/about" className="text-base font-medium text-gray-500 hover:text-white sm:hidden md:flex">
              Contact
            </Link>
            {/* <Link to="/about" className="text-base font-medium text-gray-500 hover:text-black ">
              About Us
            </Link> */}

            <Popover className="relative">
              {({ open,close }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? '' : '',
                      'group inline-flex items-center rounded-md text-base font-medium text-gray-500 hover:text-white focus:outline-none'
                    )}
                  >
                    <span>About Us</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 '
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-[999] mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              onClick={()=>{
                                close();
                                console.log('click about us')
                              }}
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-base font-medium text-gray-500">Blogs</h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="truncate text-base">
                                  <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <Link to="/about/blogs" className="font-medium text-indigo-600"
                            onClick={()=>{
                              close();
                              console.log('click about us')
                            }}>
                              View all posts
                              <span aria-hidden="true"> &rarr;</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                  {/* <CheckOutsideClick onClickOutside={handleClose}/> */}
                </>
              )}
            </Popover>
          </Popover.Group>
          
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {/* <Link href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Book a free trial
            </Link> */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdPPPSfMK7sKrTi2pAyr-zUbNLAIk1wvHeZJusZYNiWOKRbBA/viewform"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-indigo-700"
            >
              Book a free trial
            </a>
          </div>
        </div>
      </div>



             
    
    </Popover>

    
  )
}
