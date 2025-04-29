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
  const defaultClasses = 'bg-teal-300 dark:bg-teal-700 rounded-full'

  const classes = [defaultClasses, spacingClasses, className].join(' ')
  return (
    <span className={classes}>
      {message}
    </span>
  );
}
