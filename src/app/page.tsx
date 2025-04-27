import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "../../locales";

export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
