import { motion } from "framer-motion";
import about from "../data/about" // [{year,label,src,desc}…]

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-14">
      <h2 className="mb-10 text-3xl font-semibold">My Story</h2>
      <ul className="grid auto-rows-[200px] grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
        {about.map((item, i) => (
          <li key={item.year} className="relative group">
            {/* Picture frame */}
            <img
              src={item.src}
              alt={item.label}
              className="h-full w-full rounded-lg object-cover shadow-md"
            />

            {/* Hidden description “label” */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 flex flex-col justify-end rounded-lg bg-black/60 p-4 text-sm text-white"
            >
              <span className="font-semibold">{item.year}</span>
              <p>{item.desc}</p>
            </motion.div>
          </li>
        ))}
      </ul>
    </section>
  );
}
