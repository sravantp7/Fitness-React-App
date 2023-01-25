import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { BenefitType } from '@/shared/types';

export const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6'/>,
        title: 'State of the Art Facilities',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim cum necessitatibus id aliquam reiciendis.'
    },
    {
        icon: <UserGroupIcon className='h-6 w-6'/>,
        title: `100's of Diverse Classes`,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim cum necessitatibus id aliquam reiciendis.'
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6'/>,
        title: 'Expert and Pro Trainers',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim cum necessitatibus id aliquam reiciendis.'
    },
];