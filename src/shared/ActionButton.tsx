import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from '@/shared/types';

type Props = {
    children: ReactNode,
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink href={`#${SelectedPage.ContactUs}`} className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transition duration-500 cursor-pointer' onClick={() => setSelectedPage(SelectedPage.ContactUs)}>
        {children}
    </AnchorLink>
  );
}

export default ActionButton;