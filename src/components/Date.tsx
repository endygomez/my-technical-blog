"use client";

// date-fns is a modern JavaScript date utility library
// https://date-fns.org/
import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString}>
      {format(date, "LLL d, yyyy", { locale: es })}
    </time>
  );
  // view different format() string options here:
  // https://date-fns.org/v2.16.1/docs/format
}
