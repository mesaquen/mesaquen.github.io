export function TagLabel({
  message,
  compact,
  className = ""
}: {
  message: string;
  compact?: boolean;
  className?: string
}) {

  const spacingClasses = compact ? "px-2 text-sm" : "py-2 px-4"
  const defaultClasses = 'dark:text-black bg-indigo-200 rounded-full'

  const classes = [defaultClasses, spacingClasses, className].join(' ')
  return (
    <span className={classes}>
      {message}
    </span>
  );
}
