import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import { benefits } from './data';
import BenefitsSection from './BenefitsSection';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full py-20 w-5/6'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>

        {/* Header */}
        <div className='md:my-5 md:w-3/5'>
          <HText>more than just a gym.</HText>
          <p className='my-5 text-sm'>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>

        {/* Benefits */}
        <div className='md:flex items-center justify-between gap-8 mt-5'>
            {
              benefits.map((benefit) => (
                <BenefitsSection benefit={benefit} setSelectedPage={setSelectedPage} key={benefit.title}/>
              ))
            }
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;