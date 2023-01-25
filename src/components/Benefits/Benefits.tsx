import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import { benefits } from './data';
import BenefitsSection from './BenefitsSection';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const container = {
  hidden: {},
  visible:{
    transition: { staggerChildren: 0.2}
  }
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full py-20 w-5/6'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>

        {/* Header */}
        <motion.div className='md:my-5 md:w-3/5'
          initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden: {opacity: 0, x:-50}, visible: {opacity:1, x:0}}} >
          <HText>more than just a gym.</HText>
          <p className='my-5 text-sm'>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div className='md:flex items-center justify-between gap-8 mt-5'
          initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} variants={container} >
            {
              benefits.map((benefit) => (
                <BenefitsSection benefit={benefit} setSelectedPage={setSelectedPage} key={benefit.title}/>
              ))
            }
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Benefits;