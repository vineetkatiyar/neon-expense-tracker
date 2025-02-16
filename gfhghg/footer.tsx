export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full items-center border-t flex justify-center mt-10">
      <p className="text-center">@{year} All rights reserved</p>
    </footer>
  );
}
