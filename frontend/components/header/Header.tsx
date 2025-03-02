interface IHeader {
  text: string;
}

export default function Header({ text }: IHeader) {
  return (
    <header className="p-5">
      <h3 className="text-2xl font-extrabold">{text}</h3>
    </header>
  );
}
