import { NavLink } from "react-router-dom";
import { useState } from "react";

const Link = ({link}) => {
    return(
      <>
        <NavLink to={link.href} className='hover:text-indigo-400'>
            {link.label}
        </NavLink>
      </>
    )
}

const Navigation = ({ links, pageName }) => {
  const [found, setFound] = useState(false);

  return (
    <nav className="w-1/3 hidden rounded-full px-14 shadow-primary inset-shadow-2xs h-[40px] bg-white dark:bg-[#282A2C] dark:border-1 dark:border-gray-600 dark:text-gray-200 sm:hidden md:hidden lg:block xl:block 2xl:block">
      <ul className="flex justify-around items-center h-full w-full text-sm">
        {links.map(link => {
          const isMatch = !found && link.href === pageName;

          if (isMatch) {
            setFound(true);
            return (
              <li key="/" className="flex items-center">
                <Link link={{ ...link, href: '/' }} />
              </li>
            );
          }

          return (
            <li key={link.href} className="flex items-center">
              <Link link={link} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export {Link, Navigation};