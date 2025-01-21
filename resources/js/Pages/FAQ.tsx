import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { Button } from "@/Components/ui/button";

export const FAQ2 = () => (
  <div
    id="faq"
    className="w-full py-20 lg:py-40"
    style={{
      backgroundColor: "#2D4A53", // Background kontras
    }}
  >
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge
            variant="outline"
            style={{
              borderColor: "#AFB3B7",
              color: "#AFB3B7", // Warna kontras untuk badge
            }}
          >
            FAQ
          </Badge>
          <div className="flex gap-2 flex-col">
            <h4
              className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-bold"
              style={{ color: "#FFFFFF" }} // Warna putih untuk judul
            >
              Frequently Asked Questions
            </h4>
            <p
              className="text-lg leading-relaxed tracking-tight max-w-xl text-center"
              style={{ color: "#AFB3B7" }} // Warna highlight untuk deskripsi
            >
              Have questions? We’ve got answers. Learn more about how Calcolate
              helps you stay on top of your fitness goals.
            </p>
          </div>
          <div>
            <Button
              className="gap-4"
              variant="outline"
              style={{
                color: "#FFFFFF",
                borderColor: "#AFB3B7", // Warna kontras untuk tombol
              }}
            >
              Any questions? Reach out <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Accordion FAQ */}
        <div className="max-w-3xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "How does Calcolate track my calories?",
                answer:
                  "Calcolate uses an extensive food database and barcode scanner to help you log your meals accurately.",
              },
              {
                question: "Can I connect Calcolate with my fitness tracker?",
                answer:
                  "Yes! Calcolate integrates with popular fitness trackers like Fitbit and Apple Watch.",
              },
              {
                question: "Is there a free version of Calcolate?",
                answer:
                  "Absolutely. Calcolate offers a free version with essential features. You can upgrade anytime for premium features.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger
                  style={{
                    color: "#FFFFFF", // Warna putih untuk trigger
                  }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  style={{
                    color: "#AFB3B7", // Warna highlight untuk konten
                  }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
