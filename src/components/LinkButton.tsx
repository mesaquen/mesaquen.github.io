import { Link } from "@/i18n/navigation";

type LinkProps = React.ComponentProps<typeof Link>;

export function LinkButton(props: LinkProps) {
  return (
    <Link
      {...props}
      className="bg-teal-300 dark:bg-teal-700 text-lg font-black uppercase py-2 px-4 rounded-full"
    />
  );
}
