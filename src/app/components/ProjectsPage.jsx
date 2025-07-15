import { projects } from "../data/projects";

export default function Projects() {
  const list = [...projects].sort((a, b) =>
    a.title.localeCompare(b.title, "en", { sensitivity: "base" }),
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-10 text-3xl font-semibold">Projects</h2>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <li
            key={p.slug}
            className="group relative cursor-pointer overflow-hidden rounded-xl border bg-white shadow-md transition hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
          >
            <img src={p.image} alt="" className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400">
                {p.description}
              </p>
            </div>
            {/* quick-peek on hover */}
            <div className="absolute inset-0 hidden place-items-center bg-black/70 p-6 text-sm text-white group-hover:grid">
              <p>{p.stack.join(" • ")}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
