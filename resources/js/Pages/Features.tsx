import { Check } from "lucide-react";
import { Badge } from "@/Components/ui/badge";

export const Feature1 = () => (
  <div
    className="w-full py-20 lg:py-40"
    style={{
      background: "linear-gradient(135deg, #132E35, #0D1F23)", // Background gradasi dari palet
    }}
  >
    <div
      className="container mx-auto"
      style={{
        border: "1px solid #2D4A53", // Warna border disesuaikan dengan tema
        borderRadius: "8px", // Memberikan radius untuk tampilan yang lebih halus
        padding: "2rem", // Padding untuk konten dalam border
      }}
    >
      <div className="grid py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        {/* Bagian Teks */}
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge
                variant="outline"
                style={{
                  borderColor: "#69818D",
                  color: "#69818D", // Warna muted
                }}
              >
                Core Features
              </Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2
                className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-bold"
                style={{ color: "#AFB3B7" }} // Warna highlight untuk judul
              >
                Track, Learn, and Achieve
              </h2>
              <p
                className="text-lg leading-relaxed tracking-tight max-w-xl text-left"
                style={{ color: "#69818D" }} // Warna muted untuk deskripsi
              >
                Stay on top of your fitness goals with easy-to-use tracking,
                personalized insights, and community support.
              </p>
            </div>
          </div>

          {/* Fitur Individual */}
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
              <Check
                className="w-6 h-6 mt-2"
                style={{ color: "#AFB3B7" }} // Warna highlight untuk ikon
              />
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold" style={{ color: "#FFFFFF" }}>
                  Track Food & Exercise
                </p>
                <p
                  className="text-sm"
                  style={{ color: "#69818D" }} // Warna muted untuk deskripsi
                >
                  Log your meals and workouts with ease, and stay informed about
                  your progress.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check
                className="w-6 h-6 mt-2"
                style={{ color: "#AFB3B7" }} // Warna highlight untuk ikon
              />
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold" style={{ color: "#FFFFFF" }}>
                  Personalized Insights
                </p>
                <p
                  className="text-sm"
                  style={{ color: "#69818D" }} // Warna muted untuk deskripsi
                >
                  Receive tailored feedback and recommendations based on your
                  data.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check
                className="w-6 h-6 mt-2"
                style={{ color: "#AFB3B7" }} // Warna highlight untuk ikon
              />
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold" style={{ color: "#FFFFFF" }}>
                  Connect with Community
                </p>
                <p
                  className="text-sm"
                  style={{ color: "#69818D" }} // Warna muted untuk deskripsi
                >
                  Join a community of like-minded individuals for support and
                  motivation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Gambar */}
        <div
          className="rounded-md aspect-square"
          style={{
            backgroundColor: "#2D4A53", // Warna latar belakang gambar
          }}
        >
          {/* Placeholder Gambar */}
          <div className="flex justify-center items-center h-full">
            <p
              className="text-xl font-bold"
              style={{
                color: "#AFB3B7", // Warna highlight untuk teks placeholder
              }}
            >
              Image Placeholder
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
