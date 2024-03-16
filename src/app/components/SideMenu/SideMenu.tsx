import React, { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';

type MenuItem = {
  label: string;
  href: string;
};

type MenuSection = {
  title?: string;
  items: MenuItem[];
};

type Props = {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  menuSections: MenuSection[];
};

function SideMenu({ isOpen, onClose, menuSections }: Props) {
  return (
    <div className={`fixed flex-col bg-white text-black border-l border-black w-screen h-screen md:right-0 z-20 md:w-56 transition-transform duration-300 ${isOpen ? 'md:translate-x-64 translate-x-full ' : '-translate-x-0'}`}>
      <ul className='h-full flex flex-col justify-between'>
        {menuSections.map((section, sectionIndex) => (
          <React.Fragment key={sectionIndex}>
            {section.title && (
              <li>
                <span className="p-4 font-bold uppercase tracking-widest flex items-center justify-center md:justify-normal">{section.title}</span>
              </li>
            )}
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className={`my-1 flex-1 inline-flex ${!section.title ? 'border-b border-black' : ''}`}>
                <Link href={item.href} className="hover:-translate-y-2 w-full transition-transform duration-300 flex items-center justify-center md:justify-normal px-4 py-2 rounded">
                  {item.label}
                </Link>
              </li>
            ))}
          </React.Fragment>
        ))}
        <li>
          <button
            onClick={() => onClose(false)}
            className="flex flex-row justify-center md:justify-between items-center w-full h-full px-4 py-2 border-t border-black "
          >
            <span className="hover:-translate-y-2 transition-transform duration-300 tracking-widest">Close</span>
            <span className='ml-4 text-3xl'>X</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
