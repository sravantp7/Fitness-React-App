import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
  const inputStyle = `w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  const { register, trigger, formState: { errors } } = useForm();
  const handleOnSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
        e.preventDefault();
    }
  }

  return (
    <section id='contactus' className="w-5/6 mx-auto pt-24 pb-32">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)} >
            {/* Header */}
            <motion.div className="md:w-3/5" initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden: {opacity: 0, x:-50}, visible: {opacity:1, x:0}}}>
                <HText><span className="text-primary-500">Join now</span>{" "}to get in shape</HText>
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sint, magnam atque dolor accusamus omnis iste quam quidem adipisci, sed beatae illum vel perferendis natus? Asperiores facere aliquam odit ipsum voluptas ullam repellat dolor eaque corporis rem, corrupti voluptates neque.</p>
            </motion.div>

            {/* Form and Image */}
            <div className="mt-10 justify-between md:flex gap-16">
                <motion.div className="mt-10 basis-3/5 md:mt-0" initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden: {opacity: 0, y:50}, visible: {opacity:1, y:0}}}>
                    <form target="_blank" onSubmit={handleOnSubmit} method='POST' action="https://formsubmit.co/your@email.com">
                        <input type="text" className={inputStyle} placeholder="NAME" {...register('name', { required: true, maxLength: 100, })} /> { errors.name && (
                            <p className="mt-1 text-primary-500">
                                {errors.name.type === "required" && "This field is required."} 
                                {errors.name.type === "maxLength" && "Character limit is 100"} 
                            </p>
                        )}

                        <input type="email" className={inputStyle} placeholder="EMAIL" {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })} /> { errors.email && (
                            <p className="mt-1 text-primary-500">
                                {errors.email.type === "required" && "This field is required."} 
                                {errors.email.type === "pattern" && "Invalid Email address"} 
                            </p>
                        )}

                        <textarea rows={4} cols={50} className={inputStyle} placeholder="MESSAGE" {...register('message', { required: true, maxLength: 1000, })} /> { errors.message && (
                            <p className="mt-1 text-primary-500">
                                {errors.message.type === "required" && "This field is required."} 
                                {errors.message.type === "maxLength" && "Character limit is 1000"} 
                            </p>
                        )}
                        <button type='submit' className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">SUBMIT</button>
                    </form>
                </motion.div>
                <motion.div className="relative mt-16 basis-2/5 md:mt-0" initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{hidden: {opacity: 0, y:50}, visible: {opacity:1, y:0}}}>
                    <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                        <img src={ContactUsPageGraphic} alt="contactus-graphics" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  );
}

export default ContactUs;