import { DatasType, SelectedPage } from "@/shared/types";
import { motion } from 'framer-motion';
import HText from "@/shared/HText";
import { datas } from "./data";
import Class from "./Class";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Ourclasses = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className="w-full bg-primary-100 py-40">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)} >
            <motion.div className="mx-auto w-5/6" initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity:1, x:0}}}>
                <div className="md:w-3/5">
                    <HText>our classes</HText>
                    <p className="py-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aspernatur, consectetur corporis aut aliquam ipsum corrupti nobis, libero rem exercitationem labore, itaque voluptas dolorem quam. Odit quia voluptate iusto, maxime quaerat sit ducimus illum adipisci dolore ipsam possimus modi quam.</p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {
                        datas.map((item: DatasType, index: number) => (
                            <Class key={`${item.name}-${index}`} item={item} />
                        ))
                    }
                </ul>
            </div>
        </motion.div>
    </section>
  );
}

export default Ourclasses;