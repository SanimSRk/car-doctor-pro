import Image from 'next/image';
import Link from 'next/link';
const Naver = () => {
  const navilanks = [
    {
      title: 'Home',
      path: '/Home',
    },
    {
      title: 'About',
      path: '/About',
    },
    {
      title: 'Services',
      path: '/Services',
    },
    {
      title: 'Blog',
      path: '/Blog',
    },
    {
      title: 'Contacts',
      path: '/Contacts',
    },
  ];
  return (
    <div>
      <div className="navbar bg-base-100 flex items-center  justify-between">
        <div className=" items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                ssss
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>

          <a className="btn-ghost text-xl cursor-pointer">
            <Image src="/assets/logo.svg" alt="" height={40} width={80} />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">
            {navilanks.map(item => (
              <Link key={item} href={`/${item.path}`}>
                {' '}
                <li className="font-bold">{item.title} </li>{' '}
              </Link>
            ))}
          </ul>
        </div>
        <div className="">
          <a className="btn border-[#FF3811] text-[#FF3811] bg-base-100">
            Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Naver;
