import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
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
  PlayIcon,
  ShieldCheckIcon,
  // Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { vistamobile, vistarcm } from '../assets'
import { Link } from 'react-router-dom'
// import './MainHeader.css';
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
    name: 'Billing, Denial Management and A/R Follow Up',
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
  { name: 'Contact', href: 'mailto:support@vistarcmsolutions.com', target:"_blank", icon: PhoneIcon },
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
  { name: 'Contact Us', 
  href: '/about', 
  icon: ShieldCheckIcon 
},
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
          <div className="-my-2 -mr-2 md:hidden">
            
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none ">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
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
                      'group inline-flex items-center rounded-md text-base text-gray-500 hover:text-white font-medium hover:text-white focus:outline-none lg:h-2'
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
                    <Popover.Panel  className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
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
{/* 
            <Link to="/" className="text-base font-medium text-gray-500 hover:text-black sm:hidden md:flex">
              Home
            </Link> */}
            {/* <Link to="/about" className="text-base font-medium text-gray-500 hover:text-black ">
              About Us
            </Link> */}

            <Popover className="relative">
              {({ open,close }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md text-base font-medium text-gray-500 hover:text-white focus:outline-none'
                    )}
                  >
                    <span>About Us</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
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
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
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
                            <h3 className="text-base font-medium text-gray-500">Recent Posts</h3>
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
                            <Link to="/about/blogs" className="font-medium text-indigo-600">
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
            <Link
              to="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-indigo-700"
            >
              Book a free trial
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out bg-white"
        enterFrom="opacity-0 scale-95 bg-white"
        enterTo="opacity-100 scale-100 bg-white"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        // className="bg-white relative top-8"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={vistamobile}
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none ">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <Popover.Button>
                      <div>

                    <a
                    // onClick={()=>{
                    //   handleClickOpen()
                    //   console.log('click mobile')
                    // }}
                      key={item.name}
                      href={item.href}
                      // className={open?`sr-only` : `-m-3 flex items-center rounded-md p-3 hover:bg-gray-50`}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                      </div>
                    </Popover.Button>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {/* <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a> */}

                {/* <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a> */}
                {resources.map((item) => (
                  <Popover.Button>

                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                  </Popover.Button>
                ))}
              </div>
              <div>
                <Link
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-indigo-700"
                >
                  Book a free trial
                </Link>
                {/* <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-indigo-600">
                    Sign in
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
