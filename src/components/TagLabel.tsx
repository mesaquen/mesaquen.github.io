export function TagLabel({ message }: { message: string }) {
  return (
    <span className="border-primary border-2 py-2 px-4 rounded-full">
      {message}
    </span>
  );
}
