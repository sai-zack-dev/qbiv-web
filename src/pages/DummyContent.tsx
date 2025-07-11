function DummyContent({ index }: { index: number }) {
  return (
    <div
      className={`w-full h-screen text-black text-4xl flex items-center justify-center snap-start`}
    >
      {index}
    </div>
  );
}

export default DummyContent;
