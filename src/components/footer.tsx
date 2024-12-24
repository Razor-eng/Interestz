export function Footer() {
  return (
    <footer className="w-screen border-t py-4">
      <div className="w-full flex flex-col items-center justify-center md:h-24 md:flex-row md:gap-2">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with ❤️ for better financial calculations.
        </p>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Interest Calculator. All rights reserved.
        </p>
      </div>
    </footer>
  )
}