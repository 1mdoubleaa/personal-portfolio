import { certs } from "@/data/certs";
import { format } from "date-fns";

export default function Credentials() {
  const list = [...certs].sort((a, b) =>
    a.name.localeCompare(b.name, "en", { sensitivity: "base" }),
  );

  return (
    <section className="mx-auto max-w-5xl px-6 py-14">
      <h2 className="mb-10 text-3xl font-semibold">Certifications</h2>
      <ul className="grid gap-8 sm:grid-cols-2">
        {list.map((c) => (
          <li
            key={c.name}
            className="flex items-center gap-4 rounded-xl border p-4 shadow-sm dark:border-neutral-700"
          >
            <img
              src={c.badge}
              alt=""
              width={64}
              height={64}
              className="rounded"
            />
            <div>
              <h3 className="font-medium">{c.name}</h3>
              <p className="text-sm text-neutral-500">
                {c.provider} •{" "}
                {format(new Date(c.issued), "MMM yyyy")}
              </p>
              <a
                href={c.verify}
                target="_blank"
                className="text-primary underline"
              >
                Verify
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
