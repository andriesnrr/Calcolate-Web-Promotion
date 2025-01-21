import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/Components/ui/button";

export const Hero5 = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["fit", "healthy", "strong", "confident", "focused"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div
      className="w-full text-white py-20 lg:py-40"
      style={{
        background: "linear-gradient(135deg, #0D1F23, #132E35)", // Gradasi warna utama
      }}
    >
      <div className="container mx-auto text-center">
        {/* Tombol Peluncuran */}
        <div className="mb-6">
          <Button
            variant="secondary"
            size="sm"
            style={{
              backgroundColor: "#69818D", // Warna muted dari palet
              color: "#FFFFFF",
            }}
          >
            Learn more about Calcolate <MoveRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Judul Utama */}
        <h1 className="text-5xl md:text-7xl font-bold max-w-2xl mx-auto">
          Your Journey to
        </h1>

        {/* Teks Animasi dengan Flexbox untuk Center */}
        <div
          className="relative mt-4 mb-8 flex justify-center items-center overflow-hidden"
          style={{ height: "50px" }} // Tinggi tetap untuk teks animasi
        >
          {titles.map((title, index) => (
            <motion.span
              key={index}
              className="absolute font-semibold text-4xl"
              style={{ color: "#AFB3B7" }} // Warna highlight dari palet
              initial={{ opacity: 0, y: -30 }}
              animate={
                titleNumber === index
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.span>
          ))}
        </div>

        {/* Deskripsi */}
        <p
          className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-4"
          style={{ color: "#69818D" }} // Warna muted untuk deskripsi
        >
          Take control of your health and fitness with Calcolate. Track your
          meals, monitor your workouts, and stay motivated to reach your goals.
        </p>

        {/* Tombol Aksi */}
        <div className="flex justify-center gap-4 mt-8">
          <Button
            size="lg"
            style={{
              backgroundColor: "#2D4A53", // Warna accent
              color: "#FFFFFF",
            }}
          >
            Explore Features <PhoneCall className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            style={{
              backgroundColor: "#69818D", // Warna muted
              color: "#FFFFFF",
            }}
          >
            Get Started Today <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
