import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0' >
        {/* Images & Header */}
        <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6' onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            {/* Main Header */}
            <div className='z-10 mt-32 md:basis-3/5'>
              {/* Headings */}
              <motion.div className='md:-mt-20' initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden: {opacity: 0, x:-50}, visible: {opacity:1, x:0}}}>
                  <div className='relative'>
                      {/* using before: to position something relative to other */}
                      <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                        <img src={HomePageText} alt="home-page-text" />
                      </div>
                  </div>
                  <p className='text-sm mt-8'>
                    Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                    Studios to get the Body Shapes That you Dream of.. Get Your Dream
                    Body Now.
                  </p>
              </motion.div>
              {/* Actions */}
              <motion.div className='mt-8 flex items-center gap-8' initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{hidden: {opacity: 0, x:-50}, visible: {opacity:1, x:0}}}>
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                <AnchorLink href={`${SelectedPage.ContactUs}`} className='text-sm font-bold text-primary-500 underline hover:text-secondary-500 cursor-pointer' onClick={() => setSelectedPage(SelectedPage.ContactUs)} ><p>Learn More</p></AnchorLink>
              </motion.div>
            </div>

            {/* Image */}
            <div className='flex basis-3/5 justify-center md:z-[10] md:ml-40 md:mt-16 md:justify-items-end'>
                <img src={HomePageGraphic} alt="home-page-graphic" />
            </div>
        </motion.div>

        {/* Sponsors */}
        { isAboveMediumScreens && (
          <div className='h-[150px] w-full bg-primary-100 py-10'>
            <div className='mx-auto w-5/6'>
              <div className='flex w-3/5 items-center justify-between gap-8'>
                <img src={SponsorRedBull} alt="sponsor-redbull" />
                <img src={SponsorForbes} alt="sponsor-forbes" />
                <img src={SponsorFortune} alt="sponsor-fortune" />
              </div>
            </div>
          </div>
        )}
    </section>
  );
}

export default Home;