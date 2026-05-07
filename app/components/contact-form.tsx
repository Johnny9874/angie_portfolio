"use client";

import { useState, type FormEvent } from "react";
import { ActionButton } from "@/app/components/action-link";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  project: string;
  budget: string;
  message: string;
};

const initialState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  project: "Appartement",
  budget: "",
  message: "",
};

const projectOptions = ["Appartement", "Maison", "Cuisine", "Suite parentale", "Commerce"];

export function ContactForm() {
  const [formState, setFormState] = useState<ContactFormState>(initialState);

  // Keep the form state generic so one handler can update every field.
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  }

  // The submit action opens the user's mail app with a ready-to-send message.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Projet intérieur - ${formState.name || "nouvelle demande"}`;
    const body = [
      `Nom: ${formState.name}`,
      `Email: ${formState.email}`,
      `Téléphone: ${formState.phone}`,
      `Type de projet: ${formState.project}`,
      `Budget estimé: ${formState.budget}`,
      "",
      formState.message,
    ]
      .filter(Boolean)
      .join("%0D%0A");

    window.location.href = `mailto:bonjour@angieatelier.fr?subject=${encodeURIComponent(subject)}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-[2rem] border border-[color:var(--border)] bg-surface p-6 shadow-[0_18px_60px_rgba(27,21,16,0.08)] sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Nom complet
          <input
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="rounded-2xl border border-[color:var(--border)] bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)]"
            placeholder="Votre nom"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Email
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="rounded-2xl border border-[color:var(--border)] bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)]"
            placeholder="vous@exemple.fr"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Téléphone
          <input
            type="tel"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            className="rounded-2xl border border-[color:var(--border)] bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)]"
            placeholder="06 00 00 00 00"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Type de projet
          <select
            name="project"
            value={formState.project}
            onChange={handleChange}
            className="rounded-2xl border border-[color:var(--border)] bg-background px-4 py-3 text-foreground outline-none transition focus:border-[color:var(--accent)]"
          >
            {projectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-foreground">
        Budget estimé
        <input
          name="budget"
          value={formState.budget}
          onChange={handleChange}
          className="rounded-2xl border border-[color:var(--border)] bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)]"
          placeholder="Ex. 25 000 € - 50 000 €"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-foreground">
        Message
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          rows={6}
          className="rounded-[1.5rem] border border-[color:var(--border)] bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)]"
          placeholder="Parlez-moi de votre lieu, de votre calendrier et de vos attentes."
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-[color:var(--muted)]">
          Le formulaire ouvre votre messagerie avec un message prérempli. Vous pouvez aussi écrire
          directement à bonjour@angieatelier.fr.
        </p>
        <ActionButton type="submit" variant="primary" className="shrink-0">
          Envoyer la demande
        </ActionButton>
      </div>
    </form>
  );
}