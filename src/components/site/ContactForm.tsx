import { useState } from "react";
import { z } from "zod";

const WHATSAPP_NUMBER = "5511913494717";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  telefone: z.string().trim().max(30, "Telefone muito longo"),
  mensagem: z.string().trim().min(5, "Escreva sua mensagem").max(1000, "Mensagem muito longa"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const parsed = schema.safeParse({
      nome: String(data.get("nome") ?? ""),
      email: String(data.get("email") ?? ""),
      telefone: String(data.get("telefone") ?? ""),
      mensagem: String(data.get("mensagem") ?? ""),
    });

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    const v = parsed.data;
    const text = [
      "Olá, Victoria Construções! Gostaria de mais informações.",
      "",
      `Nome: ${v.nome}`,
      `Email: ${v.email}`,
      `Telefone: ${v.telefone || "não informado"}`,
      "",
      `Mensagem: ${v.mensagem}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    form.reset();
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-cream px-3 py-3 text-base outline-none focus:border-brand-soft";

  return (
    <div className="rounded-2xl border border-border bg-card p-7">
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="nome" className="mb-1.5 block text-sm font-bold text-brand-dark">
              Nome
            </label>
            <input id="nome" name="nome" maxLength={100} className={inputClass} />
            {errors.nome && <p className="mt-1 text-sm text-destructive">{errors.nome}</p>}
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-brand-dark">
              Email
            </label>
            <input id="email" name="email" type="email" maxLength={255} className={inputClass} />
            {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="telefone" className="mb-1.5 block text-sm font-bold text-brand-dark">
              Telefone
            </label>
            <input id="telefone" name="telefone" maxLength={30} className={inputClass} />
            {errors.telefone && <p className="mt-1 text-sm text-destructive">{errors.telefone}</p>}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="mensagem" className="mb-1.5 block text-sm font-bold text-brand-dark">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              maxLength={1000}
              className={`${inputClass} min-h-[130px] resize-y`}
            />
            {errors.mensagem && <p className="mt-1 text-sm text-destructive">{errors.mensagem}</p>}
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 rounded-lg bg-brand px-6 py-3.5 font-bold text-primary-foreground transition-colors hover:bg-brand-dark"
        >
          Enviar mensagem
        </button>
        <p className="mt-3 text-sm text-muted-foreground">
          Ao enviar, você será direcionado ao nosso WhatsApp comercial (11) 91349-4717 com os dados
          preenchidos.
        </p>
      </form>
    </div>
  );
}
