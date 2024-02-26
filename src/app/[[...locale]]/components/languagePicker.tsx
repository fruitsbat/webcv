import LanguageLink from "./languageLink";

export default function LanguagePicker() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col">
        <LanguageLink locale="de" />
        <LanguageLink locale="en" />
      </div>
    </main>
  );
}
