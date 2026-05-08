export default function AnnouncementBar({ message }: { message: string }) {
  return (
    <div className="bg-maroon text-cream text-center text-xs tracking-widest uppercase py-2 px-4 font-medium">
      {message}
    </div>
  )
}
