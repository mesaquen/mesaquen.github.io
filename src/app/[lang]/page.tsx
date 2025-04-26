import { getDictionary } from "@/dictionaries";

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <div>
      <h1>{t.salutation}</h1>
      <p>{t["job-title"]}</p>
      <button>{t.about}</button>
    </div>
  );
}
