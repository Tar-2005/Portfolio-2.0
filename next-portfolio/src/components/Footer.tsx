export default function Footer() {
  return (
    <footer className="w-full border-t border-foreground/10 py-10 mt-20 relative z-10 glass">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-foreground/50 font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Tarun Kumar. All rights reserved.
        </p>
        <p className="text-sm text-foreground/40 tracking-wide font-mono">
          Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
