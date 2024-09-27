"use client"; 
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { motion } from "framer-motion";
const page = () => {
  const text="FAQ";
  return (
    <div className="bg-gray-100 pb-36 pl-12 pt-4">  
     {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }} className='text-xl md:text-3xl lg:text-5xl  font-libre-baskerville'
              >
                {letter}
              </motion.span>
            ))}
    <div className="flex justify-center items-center mt-10 md:mx-9 lg:mx-16">
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="lg:font-medium lg:text-3xl lg:h-24 ">What is EcoShop and how does it work?</AccordionTrigger>
        <AccordionContent>
        EcoShop is an online marketplace dedicated to offering eco-friendly and sustainable products. Our goal is to provide environmentally 
        conscious consumers with a wide range of high-quality products that help reduce environmental impact.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="lg:font-medium lg:text-3xl lg:h-24">what are the products?</AccordionTrigger>
        <AccordionContent>
        EcoShop offers a variety of environmentally friendly products across multiple categories:bedding,clothing and furniture also others .
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="lg:font-medium lg:text-3xl lg:h-24">what are the payment option?</AccordionTrigger>
        <AccordionContent>
          currently our platform payment method is using stripe u will have different option to process your payment.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
    </div>

  )
}

export default page
