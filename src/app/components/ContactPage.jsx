import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="mx-auto max-w-xl px-6 py-14">
      <h2 className="mb-6 text-3xl font-semibold">Get in Touch</h2>

      <ul className="mb-8 space-y-2 text-sm">
        <li>
          📧 <a href="mailto:muham.anw247@gmail.com">muham.anw247@gmail.com</a>
        </li>
        <li>
          💼 <a href="https://linkedin.com/in/anas-anwar">LinkedIn</a>
        </li>
        <li>
          🐙 <a href="https://github.com/your-handle">GitHub</a>
        </li>
        <li>
          📄{" "}
          <a href="/Anas-Anwar-Resume.pdf" download>
            Résumé&nbsp;(PDF)
          </a>
        </li>
      </ul>

      <ContactForm />
    </section>
  );
}
