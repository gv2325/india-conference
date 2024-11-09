import { Suspense } from "react";
import Link from "next/link";
import { Header1 } from '@/app/components/Header1';
import { Layout484 } from "@/app/components/Layout484";
import { Layout219 } from "@/app/components/Layout219";
import { Testimonial15 } from "@/app/components/Testimonial15";
import { Team2 } from "@/app/components/Team2";
import { Logo4 } from "@/app/components/Logo4";
import { Event31 } from "@/app/components/Event31";
import { Layout414 } from "./components/Layout414";
import { EventItemHeader2 } from "./components/EventItem2";

export default function Page() {
  return (
    <div className="relative">
      <Header1 />
      <Layout484 />
      <Layout219 />
      <Testimonial15 />
      <Team2 />
      <Logo4 />
      <Event31 />
      <Layout414 />
      <EventItemHeader2 />
    </div>
  );
}