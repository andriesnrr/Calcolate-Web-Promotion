"use client";

import { CalendarIcon, MoveRight } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Calendar } from "@/Components/ui/calendar";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";

export const Contact1 = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div
      id="contact"
      className="w-full py-20 lg:py-40"
      style={{
        backgroundColor: "#132E35", // Background kontras
      }}
    >
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Informasi Kontak */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge
                  variant="outline"
                  style={{
                    borderColor: "#AFB3B7",
                    color: "#AFB3B7", // Warna kontras untuk badge
                  }}
                >
                  Contact
                </Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4
                  className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-bold"
                  style={{ color: "#FFFFFF" }} // Warna putih untuk judul
                >
                  Let’s Connect
                </h4>
                <p
                  className="text-lg leading-relaxed tracking-tight max-w-sm text-left"
                  style={{ color: "#AFB3B7" }} // Warna highlight untuk deskripsi
                >
                  Reach out to us for any questions or schedule a meeting with
                  one of our experts.
                </p>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="justify-center flex items-center">
            <div
              className="rounded-md max-w-sm flex flex-col border p-8 gap-4"
              style={{
                borderColor: "#AFB3B7",
              }}
            >
              <p
                className="text-xl font-bold"
                style={{ color: "#FFFFFF" }} // Warna putih untuk judul
              >
                Book a Meeting
              </p>
              {/* Date Picker */}
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="date">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full max-w-sm justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                      style={{
                        color: "#FFFFFF",
                        borderColor: "#AFB3B7",
                      }}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Nama Depan */}
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="firstname">First Name</Label>
                <Input id="firstname" type="text" />
              </div>

              {/* Nama Belakang */}
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="lastname">Last Name</Label>
                <Input id="lastname" type="text" />
              </div>

              {/* Upload File */}
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="upload">Upload File</Label>
                <Input id="upload" type="file" />
              </div>

              {/* Tombol Submit */}
              <Button
                className="gap-4 w-full"
                style={{
                  backgroundColor: "#AFB3B7",
                  color: "#0D1F23",
                }}
              >
                Book the Meeting <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
