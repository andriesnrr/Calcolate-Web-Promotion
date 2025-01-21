"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

export const Testimonials1 = () => {
  const testimonials = [
    {
      name: "Sarah W.",
      feedback:
        "I've lost 20 pounds in just three months! Calcolate makes it easy to track my meals and exercise.",
      avatar: "https://via.placeholder.com/150",
    },
    {
      name: "James D.",
      feedback:
        "Tracking my calories has never been easier. I feel healthier and more confident than ever!",
      avatar: "https://via.placeholder.com/150",
    },
    {
      name: "Emily R.",
      feedback:
        "The personalized insights and community support keep me motivated every single day.",
      avatar: "https://via.placeholder.com/150",
    },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrentIndex(0);
        api.scrollTo(0);
      } else {
        setCurrentIndex(currentIndex + 1);
        api.scrollNext();
      }
    }, 4000);

    return () => clearTimeout(interval); // Menghapus timer saat komponen di-unmount atau efek berubah
  }, [api, currentIndex]);

  return (
    <div
      className="w-full py-20 lg:py-40"
      style={{
        background: "linear-gradient(135deg, #132E35, #0D1F23)", // Background gradasi dari palet
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2
            className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left"
            style={{ color: "#AFB3B7" }} // Warna highlight
          >
            Hear from Our Happy Users
          </h2>

          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div
                    className="rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col"
                    style={{
                      backgroundColor: "#2D4A53", // Warna card
                      color: "#FFFFFF", // Teks putih
                    }}
                  >
                    <Avatar className="h-16 w-16 mx-auto">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-4 text-center mt-4">
                      <p
                        className="text-lg italic"
                        style={{ color: "#AFB3B7" }} // Warna highlight untuk feedback
                      >
                        "{testimonial.feedback}"
                      </p>
                      <p className="font-bold">{testimonial.name}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
