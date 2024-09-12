import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
const page = () => {
  return (
    <div className="bg-gray-100">  
    <h1 className="mx-12 font-libre-baskerville font-semibold text-5xl">FAQ</h1>    
    <div className="flex justify-center items-center mt-10 mx-36">
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-medium text-3xl h-24">What is EcoShop and how does it work?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-medium text-3xl h-24">what are the products?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-medium text-3xl h-24">what are the payment option?</AccordionTrigger>
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
