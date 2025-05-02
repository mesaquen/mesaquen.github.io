import { Link } from "@/i18n/navigation";

type LinkProps = React.ComponentProps<typeof Link>;

export function LinkButton({ className, ...props }: LinkProps) {
  return (
    <Link
      {...props}
      className={`bg-teal-300 cursor-pointer dark:bg-teal-700 transition-colors hover:bg-orange-300 text-lg font-black uppercase py-2 px-4 rounded-full ${className}`}
    />
  );
}
