import "./Header.css";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className='max-w-[1320px] mx-auto'>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box'>
              <label className='input rounded-full bg-[#150B2B0D] flex md:hidden items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='w-4 h-4 opacity-70'>
                  <path
                    fillRule='evenodd'
                    d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                    clipRule='evenodd'
                  />
                </svg>
                <input type='text' className='grow' placeholder='Search' />
              </label>
              <li className=''>
                <a className='hover:bg-white text-[#150B2BB3] text-base font-normal'>
                  Home
                </a>
              </li>
              <li>
                <a className='hover:bg-white text-[#150B2BB3] text-base font-normal'>
                  Recipes
                </a>
              </li>
              <li>
                <a className='hover:bg-white text-[#150B2BB3] text-base font-normal'>
                  About
                </a>
              </li>
              <li>
                <a className='hover:bg-white text-[#150B2BB3] text-base font-normal'>
                  Search
                </a>
              </li>
            </ul>
          </div>
          <a className='cursor-pointer text-3xl font-bold text-[#150B2B]'>
            JustForFoodies
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 space-x-12'>
            <li className=''>
              <a className='hover:bg-white text-[#150B2BB3] text-base font-normal'>
                Home
              </a>
            </li>
            <li>
              <a className='hover:bg-white text-[#150B2BB3] text-base font-normal'>
                Recipes
              </a>
            </li>
            <li>
              <a className='hover:bg-white text-[#150B2BB3] text-base font-normal'>
                About
              </a>
            </li>
            <li>
              <a className='hover:bg-white text-[#150B2BB3] text-base font-normal'>
                Search
              </a>
            </li>
          </ul>
        </div>
        <div className='navbar-end space-x-4'>
          <label className='input rounded-full bg-[#150B2B0D] hidden md:flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70'>
              <path
                fillRule='evenodd'
                d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                clipRule='evenodd'
              />
            </svg>
            <input type='text' className='grow' placeholder='Search' />
          </label>
          <div className='w-11 h-11 cursor-pointer bg-[#0BE58A] rounded-full flex justify-center items-center'>
            <CgProfile className='w-8 h-8' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
